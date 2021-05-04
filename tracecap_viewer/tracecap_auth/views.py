from django.shortcuts import redirect
from django.urls import reverse
from django.conf import settings
from github import Github
from django.http import Http404
from django.http import HttpResponse, HttpResponseRedirect
from django.utils.crypto import get_random_string
from django.contrib.auth import login
from django.contrib.auth.models import User
import os

github = Github()
github_oauth = github.get_oauth_application(
    client_id=os.getenv('GITHUB_OAUTH_CLIENT_ID'),
    client_secret=os.getenv('GITHUB_OAUTH_CLIENT_SECRET'),
)

def github_login(request):
    state = get_random_string(length=32)
    request.session['tmp_oauth_state'] = state
    login_url = github_oauth.get_login_url(
        redirect_uri=settings.SITE_URL + reverse('github-oauth-callback'),
        state=state,
    )
    return redirect(login_url + '&scope=read:org')

def github_callback(request):
    state = request.session['tmp_oauth_state']
    if state != request.GET['state']:
        raise Http404('State did not match')
    access_token = github_oauth.get_access_token(request.GET['code'], state)
    g = Github(access_token.token)
    gu = g.get_user()

    target_username = gu.login

    try:
        user = User.objects.get(username=target_username)
    except User.DoesNotExist:
        user = User(username=target_username)
        user.set_unusable_password()
        user.save()
    
    if user.has_usable_password():
        return HttpResponse(status=400)
    
    login(request, user)

    orgs = []
    for org in gu.get_orgs():
        orgs.append(org.login)
    request.session['github_orgs'] = orgs

    return HttpResponseRedirect(reverse('ui', kwargs={'provider': 'github.com', 'scope': user.username}))
