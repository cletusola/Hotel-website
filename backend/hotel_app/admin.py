from django.contrib import admin
from .models import Room,Reservation


class RoomAdmin(admin.ModelAdmin):
    list_display = ['name','price','category']
    list_display_links = ['name','price','category']
    list_filter = ['category']
    search_fields = ['name']

admin.site.register(Room,RoomAdmin)

class ReservationAdmin(admin.ModelAdmin):
    list_display = ['room','customer_name','checkin','checkout','date_booked']
    list_display_links = ['room','customer_name','date_booked']

admin.site.register(Reservation,ReservationAdmin)
    
