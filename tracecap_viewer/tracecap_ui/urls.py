from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('orgs/', views.org_chooser, name='org-chooser'),
    path('<path:provider>/<path:scope>/ui/', views.ui, name='ui'),
    path('<path:provider>/<path:scope>/ui/upload', views.upload_file, name='upload'),
    path('<path:provider>/<path:scope>/ui/data-load/<slug:trace_name>.tcap', views.data_load, name='data-load')
]
