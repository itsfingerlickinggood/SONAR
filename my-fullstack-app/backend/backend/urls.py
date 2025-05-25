from django.contrib import admin
from django.urls import path
from django.http import JsonResponse

def hello(request):
    return JsonResponse({"message": "Hello from Django!"})

def home(request):
    return JsonResponse({"message": "Welcome to the root route"})

urlpatterns = [
    path('', home),
    path('admin/', admin.site.urls),
    path('api/hello/', hello),
]
