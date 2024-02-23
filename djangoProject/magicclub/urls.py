from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("main/", views.main, name="main"),
    path("introduction/", views.introduction, name="introduction"),
    path("event/", views.events_on, name="events_on"),
    path("events/", views.events_done, name="events_done"),
    path("community/", views.community, name="community"),
    path("notifications/", views.notification, name="notifications"),
    path("inquire/", views.inquire, name="inquire"),
]
