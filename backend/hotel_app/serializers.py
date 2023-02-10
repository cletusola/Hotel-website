from rest_framework import serializers 

from .models import Room,Reservation


# room serializer 
class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = '__all__' 


# reservation request 
class ReservationRequest(serializers.Serializer):
    room = serializers.CharField(max_length=90, required=True)
    customer_name = serializers.CharField(max_length=90, required=True)
    customer_email = serializers.EmailField(max_length=150, required=True)
    customer_phone = serializers.CharField(max_length=20, required=True)
    checkin = serializers.CharField(max_length=30, required=True)
    checkout = serializers.CharField(max_length=30, required=True)



# contact form
class ContactUs(serializers.Serializer):
    name = serializers.CharField(max_length=90, required=True)
    email = serializers.CharField(max_length=90, required=True)
    message = serializers.CharField(required=True)

