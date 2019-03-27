# backend/urls.py

from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from movie import views as MovieView

router = routers.DefaultRouter()
router.register(r'movies', MovieView.Movie, 'movie')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls))
]
