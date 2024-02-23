from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
    return render(request, 'index.html')

def main(request):
    return index(request)
def introduction(request):
    return render(request, 'introduction.html')

def events_on(request):
    return render(request, 'event_ongoing.html')
def events_done(request):
    return render(request, 'event_done.html')
def community(request):
    return HttpResponse("KakaoTalk link")

def notification(request):
    return render(request, "notification.html")

def inquire(request):
    return render(request, "inquire.html")
