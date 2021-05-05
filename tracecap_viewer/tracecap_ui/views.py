from django.shortcuts import render
from django.urls import reverse
from django.http import HttpResponse, HttpResponseRedirect, Http404
from django.contrib.auth.decorators import login_required
from django.conf import settings
from django.db.utils import IntegrityError
from django.core.signing import Signer
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from .forms import UploadFileForm
from .models import TraceCapture, Project, PushToken

import uuid
import gzip
import os
import boto3
from botocore.client import Config

signer = Signer()

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

def token_auth_and_get_api_project(request, provider, scope):
    auth_header = request.headers['Authorization']
    if not auth_header.startswith('Bearer '):
        raise Http404
    bearer_token = auth_header.split(' ')[1]
    print(bearer_token)
    push_token = PushToken.objects.get(token=bearer_token)
    project = push_token.project
    if project.provider != provider or project.name != scope:
        raise Http404
    return project, push_token.user

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
def push_token(request, provider, scope):
    project, all_projects = get_user_project_and_rest(request, provider, scope)
    try:
        pt = PushToken.objects.get(user=request.user, project=project)
    except PushToken.DoesNotExist:
        pt = PushToken(user=request.user, project=project)
        pt.set_random_token()
        pt.save()
    data = {
        'project': project,
        'token': pt,
    }
    return render(request, 'tracecap_ui/push_token.html', data)

def upload_get_presigned(provider, scope, redirect=True):
    fn = str(uuid.uuid4()) + '.tcap'
    content_type = 'application/octet-stream'

    signed_fn = signer.sign(fn)

    fields = {"acl": "private", "Content-Type": content_type}
    conditions = [{"acl": "private"}, {"Content-Type": content_type}]

    if redirect:
        redirect_url = settings.SITE_URL + reverse('upload', kwargs={'provider': provider, 'scope': scope}) + '?uploaded_file=' + signed_fn
        fields['success_action_redirect'] = redirect_url
        conditions.append({"success_action_redirect": redirect_url})

    response = storage_client.generate_presigned_post(
        os.getenv('TRACECAP_STORAGE_BUCKET'),
        fn,
        Fields=fields,
        Conditions=conditions,
        ExpiresIn=3600
    )

    return response, signed_fn

def upload_claim(user, project, uploaded_file):
    if '?' in uploaded_file:
        uploaded_file, _ = uploaded_file.split('?')
    fn = signer.unsign(uploaded_file)

    existing = TraceCapture.objects.filter(filename=fn).count()
    if existing > 0:
        # it's not acceptable to claim a file that has already been claimed, even with a valid signed filename
        return HttpResponse(status=400)

    tc = TraceCapture()
    tc.user = user
    tc.project = project
    tc.filename = fn
    tc.save()

    return tc

@csrf_exempt
def push_api(request, provider, scope):
    project, user = token_auth_and_get_api_project(request, provider, scope)

    if request.method != 'POST':
        raise Http404

    uploaded_file = request.GET.get('uploaded_file', None)
    if uploaded_file is None:
        response, signed_fn = upload_get_presigned(provider, scope, redirect=False)
    
        return JsonResponse({
            'upload_to': response,
            'claim_url': settings.SITE_URL + reverse('push-api', kwargs={'provider': provider, 'scope': scope}) + '?uploaded_file=' + signed_fn,
        })
    else:
        tc = upload_claim(user, project, uploaded_file)

        return JsonResponse({
            'url': settings.SITE_URL + reverse('ui', kwargs={'provider': provider, 'scope': scope}) + '?q=load%20' + tc.slug,
            'query': 'load ' + tc.slug,
        })

@login_required
def upload_file(request, provider, scope):
    project, all_projects = get_user_project_and_rest(request, provider, scope)

    uploaded_file = request.GET.get('uploaded_file', None)
    if uploaded_file is None:
        response, _ = upload_get_presigned(provider, scope)
    
        return render(request, 'tracecap_ui/upload.html', {'upload_presigned': response, 'project': project})
    else:
        tc = upload_claim(request.user, project, uploaded_file)

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
