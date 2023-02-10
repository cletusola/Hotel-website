from rest_framework import permissions,generics,status
from rest_framework.views import APIView 
from rest_framework.response import Response 


from .models import Room,Reservation
from .serializers import RoomSerializer,ReservationRequest,ContactUs

import os 
from dotenv import load_dotenv
import smtplib, ssl  
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


load_dotenv('../.env')

# single room List view
class SingleRoomListView(generics.ListAPIView):
    queryset = Room.single.all().order_by('-date')
    serializer_class = RoomSerializer
    lookup_field = 'id'
    permission_classes = [permissions.AllowAny]

#  twin room List view
class TwinRoomListView(generics.ListAPIView):
    queryset = Room.twin.all().order_by('-date')
    serializer_class = RoomSerializer
    lookup_field = 'id'
    permission_classes = [permissions.AllowAny]

#  studio room List view
class StudioRoomListView(generics.ListAPIView):
    queryset = Room.studio.all().order_by('-date')
    serializer_class = RoomSerializer
    lookup_field = 'id'
    permission_classes = [permissions.AllowAny]

 
# suite List view
class SuiteListView(generics.ListAPIView):
    queryset = Room.suite.all().order_by('-date')
    serializer_class = RoomSerializer
    lookup_field = 'id'
    permission_classes = [permissions.AllowAny]


# Reservation Request View
class ReservationView(APIView):

    permission_classes = [permissions.AllowAny]
    serializer_class = ReservationRequest


    def post(self, request, format=None):
        data = request.data
        room = request.data.get('room')
        customer_name = request.data.get('customer_name')
        customer_email = request.data.get('customer_email')
        customer_phone = request.data.get('customer_phone')
        checkin = request.data.get('checkin')
        checkout = request.data.get('checkout')

        customer_service = 'customerservice@domain.com'

        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid(raise_exception=True):

            try: 
                msg = MIMEMultipart("alternative")
                msg["Subject"] = "New Reservation Request"
                msg["From"] = customer_email
                msg["To"] = os.getenv('SMTP_USER')


                text = f""" New reservation request from {customer_name} """
                html = f""" \
                        <html>
                        <body>
                            <p> Hello, there is a new reservation request for
                            <b>{room}</b></p>
                            <p>Customer information:</p>
                            <p>Name: {customer_name}</p>
                            <p>Email: {customer_email}</p>
                            <p>Phone: {customer_phone}</p>
                            <p>CheckIn: {checkin}</p>
                            <p>CheckOut: {checkout}</p>
                            <br/><br/>
                        </body>
                        </html>
                        """
                email_text = MIMEText(text,"plain")
                email_html = MIMEText(html, "html")

                msg.attach(email_text)
                msg.attach(email_html)

                context = ssl.create_default_context()
                with smtplib.SMTP_SSL(os.getenv('SMTP_SERVER'), int(os.getenv('SMTP_PORT')), context=context) as server:
                    server.login(os.getenv('SMTP_USER'), os.getenv('SMTP_PASSWORD'))
                    server.sendmail(os.getenv('SMTP_USER'),customer_support,msg.as_string())

                return Response({
                    "message": "Reservation request sent, please check your email to follow up and do not make same reservation twice."
                })    

            except:
                return Response({
                    "error": "Unable to make reservation, try again later"
                })

        else:
            return Response({
                "message":"please check the form and make sure all required fields are filled"
            })

# Contact View
class ContactView(APIView):

    permission_classes = [permissions.AllowAny]
    serializer_class = ContactUs


    def post(self, request, format=None):
        data = request.data
        name = request.data.get('name')
        email = request.data.get('email')
        message = request.data.get('message')
        customer_support = 'customersupport@domain.com'

        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid(raise_exception=True):

            try: 
                msg = MIMEMultipart("alternative")
                msg["Subject"] = "New Reservation Request"
                msg["From"] = email
                msg["To"] = os.getenv('SMTP_USER')


                text = f""" Message from {name} """
                html = f""" \
                        <html>
                        <body>
                            <p> Hello, there is a new message from
                            <b>{email}</b></p>
                            <p>Sender: </p>
                            <p>{name}</p>
                            <p>{email}</p>
                            <p>Content: </P>
                            <p>{message}</p>
                            <br/><br/>
                        </body>
                        </html>
                        """
                email_text = MIMEText(text,"plain")
                email_html = MIMEText(html, "html")

                msg.attach(email_text)
                msg.attach(email_html)

                context = ssl.create_default_context()
                with smtplib.SMTP_SSL(os.getenv('SMTP_SERVER'), int(os.getenv('SMTP_PORT')), context=context) as server:
                    server.login(os.getenv('SMTP_USER'), os.getenv('SMTP_PASSWORD'))
                    server.sendmail(os.getenv('SMTP_USER'),customer_support,msg.as_string())

                return Response({
                    "message": "Reservation request sent, please check your email to follow up and do not make same reservation twice."
                })    

            except:
                return Response({
                    "error": "Unable to make reservation, try again later"
                })

        else:
            return Response({
                "message":"please check the form and make sure all required fields are filled"
            })



    




