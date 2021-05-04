from django.urls import path

from . import views

urlpatterns = [
    path('login/github/oauth/begin', views.github_login, name='github-oauth-login'),
    path('login/github/oauth/callback', views.github_callback, name='github-oauth-callback'),
]
