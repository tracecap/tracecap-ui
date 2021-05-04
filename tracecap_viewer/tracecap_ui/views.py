from django.shortcuts import render
from django.urls import reverse
from django.http import HttpResponse, HttpResponseRedirect, Http404
from django.contrib.auth.decorators import login_required
from django.conf import settings
from django.db.utils import IntegrityError
from django.core.signing import Signer

from .forms import UploadFileForm
from .models import TraceCapture, Project

import uuid
import gzip
import os
import boto3
from botocore.client import Config

storage_session = boto3.session.Session()
storage_client = storage_session.client('s3',
                        region_name='sfo3',
                        endpoint_url='https://sfo3.digitaloceanspaces.com',
                        aws_access_key_id=os.getenv('TRACECAP_STORAGE_ACCESS_KEY'),
                        aws_secret_access_key=os.getenv('TRACECAP_STORAGE_SECRET_KEY'),
                        config=Config(signature_version='s3'))

def get_or_create_project(provider, name):
    
    try:
        project = Project.objects.get(provider=provider, name=name)
    except Project.DoesNotExist:
        try:
            project = Project(provider=provider, name=name)
            project.save()
        except IntegrityError: # duplicate key, so must exist by now
            project = Project.objects.get(provider=provider, name=name)
    return project

def get_allowable_github_projects(request):
    github_scopes = []
    if request.user.is_authenticated:
        github_scopes = request.session.get('github_orgs', [])
        github_scopes.append(request.user.username)
    return github_scopes

def get_user_projects(request):
    if not request.user.is_authenticated: return []

    # we only support github auth
    github_scopes = get_allowable_github_projects(request)

    existing_projects = Project.objects.filter(provider='github.com', name__in=github_scopes)
    existing_projects = list(existing_projects)
    missing_scopes = github_scopes[:]
    for project in existing_projects:
        missing_scopes.remove(project.name)

    for scope in missing_scopes:
        existing_projects.append(get_or_create_project('github.com', scope))
    
    return existing_projects

def get_user_project_and_rest(request, provider, scope):
    all_projects = get_user_projects(request)

    selected_project = None
    for project in all_projects:
        if project.provider == provider and project.name == scope:
            selected_project = project
    
    if selected_project is None:
        raise Http404

    return (selected_project, all_projects)

def index(request):
    if request.user.is_authenticated:
        return HttpResponseRedirect(reverse('org-chooser'))
    return render(request, 'index.html')

@login_required
def org_chooser(request):
    data = {
        'projects': get_user_projects(request),
    }
    return render(request, 'tracecap_ui/org_chooser.html', data)

@login_required
def ui(request, provider, scope):
    project, all_projects = get_user_project_and_rest(request, provider, scope)

    data = {
        'project': project,
        'all_projects': all_projects,
    }

    return render(request, 'tracecap_ui/viewer.html', data)

@login_required
def upload_file(request, provider, scope):
    project, all_projects = get_user_project_and_rest(request, provider, scope)

    signer = Signer()

    uploaded_file = request.GET.get('uploaded_file', None)
    if uploaded_file is None:
        fn = str(uuid.uuid4()) + '.tcap'
        content_type = 'application/octet-stream'

        signed_fn = signer.sign(fn)

        redirect = settings.SITE_URL + reverse('upload', kwargs={'provider': provider, 'scope': scope}) + '?uploaded_file=' + signed_fn
        response = storage_client.generate_presigned_post(
            os.getenv('TRACECAP_STORAGE_BUCKET'),
            fn,
            Fields={"acl": "private", "Content-Type": content_type, "success_action_redirect": redirect},
            Conditions=[{"acl": "private"}, {"Content-Type": content_type}, {"success_action_redirect": redirect}],
            ExpiresIn=3600
        )
    
        return render(request, 'tracecap_ui/upload.html', {'upload_presigned': response})
    else:
        if '?' in uploaded_file:
            uploaded_file, _ = uploaded_file.split('?')
        fn = signer.unsign(uploaded_file)

        existing = TraceCapture.objects.filter(filename=fn).count()
        if existing > 0:
            # it's not acceptable to claim a file that has already been claimed, even with a valid signed filename
            return HttpResponse(status=400)

        tc = TraceCapture()
        tc.user = request.user
        tc.project = project
        tc.filename = fn
        tc.save()

        return HttpResponseRedirect(reverse('ui', kwargs={'provider': provider, 'scope': scope}) + '?q=load%20' + tc.slug)

@login_required
def data_load(request, provider, scope, trace_name):
    project, all_projects = get_user_project_and_rest(request, provider, scope)

    tc = TraceCapture.objects.get(project=project, slug=trace_name)

    url = storage_client.generate_presigned_url(ClientMethod='get_object',
                                    Params={'Bucket': os.getenv('TRACECAP_STORAGE_BUCKET'),
                                            'Key': tc.filename},
                                    ExpiresIn=300)
    return HttpResponseRedirect(url)
