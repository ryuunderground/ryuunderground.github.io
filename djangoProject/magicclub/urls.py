from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("main/", views.main, name="main"),
    path("introduction/", views.introduction, name="introduction"),
    path("event/", views.events_on, name="events_on"),
    path("community/", views.community, name="community"),
    path("notifications/", views.notification, name="notifications"),
    path("notifications/rule", views.notification_rule, name="notifications_rule"),

    path("inquire/", views.inquire, name="inquire"),

    path("event/febuary/", views.events_feb, name="event_febuary"),
    path("event/march/", views.events_mar, name="event_march"),
    path("event/april/", views.events_apr, name="event_april"),
    path("event/may/", views.events_may, name="event_may"),
]
