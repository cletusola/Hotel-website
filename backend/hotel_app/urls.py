from django.urls import path 
from django.conf import settings
from django.conf.urls.static import static

from .views import (
    SingleRoomListView,
    TwinRoomListView,
    StudioRoomListView,
    SuiteListView,
    ReservationView,
    ContactView
)


urlpatterns = [
    path('single/', SingleRoomListView.as_view(), name="single"),
    path('twin/', TwinRoomListView.as_view(), name="twin"),
    path('studio/', StudioRoomListView.as_view(), name="studio"),
    path('suite/', SuiteListView.as_view(), name="suite"),
    path('reservation/', ReservationView.as_view(), name="reservation"),
    path('contact/', ContactView.as_view(), name="contact"),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)