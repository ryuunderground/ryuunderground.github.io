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
def events_feb(request):
    return render(request, 'febuary.html')
def events_mar(request):
    return render(request, 'march.html')
def events_apr(request):
    return render(request, 'april.html')
def events_may(request):
    return render(request, 'may.html')

def community(request):
    return HttpResponse("KakaoTalk link")

def notification(request):
    return render(request, "notification.html")

def inquire(request):
    return render(request, "inquire.html")
