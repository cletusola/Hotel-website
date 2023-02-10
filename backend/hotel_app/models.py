from django.db import models
from datetime import date 




# rooms model 
class Room(models.Model):

    #room categories
    CATEGORIES = (
        ('Single Room','Single Room'),
        ('Twin Room','Twin Room'),
        ('Studio Room','Studio Room'),
        ('Suite','Suite'),
    )
    # custom model for available rooms
    class SingleRoom(models.Manager):
        def get_queryset(self):
            return super().get_queryset().filter(category='Single Room')

    # custom model for twin rooms
    class TwinRoom(models.Manager):
        def get_queryset(self):
            return super().get_queryset().filter(category='Twin Room')

    # custom model for studio rooms
    class StudioRoom(models.Manager):
        def get_queryset(self):
            return super().get_queryset().filter(category='Twin Room')

    # custom model for suites
    class Suite(models.Manager):
        def get_queryset(self):
            return super().get_queryset().filter(category='Suite')

    name = models.CharField(max_length=90, null=False, blank=False)
    image1 = models.ImageField(upload_to=f"rooms/{date.today()}", null=False, blank=False)
    image2 = models.ImageField(upload_to=f"rooms/{date.today()}", null=False, blank=False)
    image3 = models.ImageField(upload_to=f"rooms/{date.today()}", null=False, blank=False)
    image4 = models.ImageField(upload_to=f"rooms/{date.today()}", null=True, blank=True)
    image5 = models.ImageField(upload_to=f"rooms/{date.today()}", null=True, blank=True)
    image6 = models.ImageField(upload_to=f"rooms/{date.today()}", null=True, blank=True)
    image7 = models.ImageField(upload_to=f"rooms/{date.today()}", null=True, blank=True)
    price = models.CharField(max_length=100, null=False, blank=False)
    description = models.TextField(null=False, blank=False)
    category = models.CharField(max_length=20, choices=CATEGORIES, default='Single Room', null=True, blank=True)
    date = models.DateTimeField(auto_now_add=True, null=False, blank=False)
    objects = models.Manager() # default model manager 
    single = SingleRoom() # single rooms model manager
    twin = TwinRoom() # twin rooms model manager
    studio = StudioRoom() # studio rooms model manager
    suite = Suite() # suite rooms model manager



    class Meta:
        ordering = ['-date']


    def __str__(self):
        return self.name



# reservation model 
class Reservation(models.Model):
    room = models.CharField(max_length=90, null=False, blank=False)
    customer_name = models.CharField(max_length=90, null=False, blank=False)
    customer_email = models.EmailField(max_length=150, null=False, blank=False)
    customer_phone = models.CharField(max_length=20, null=False, blank=False)
    checkin = models.DateTimeField(auto_now_add=False, null=False, blank=False)
    checkout = models.DateTimeField(auto_now_add=False, null=False, blank=False)
    date_booked = models.DateTimeField(auto_now_add=True, null=False, blank=False)

    class Meta:
        ordering = ['-date_booked']    

    def __str__(self):
        return self.name 








 

