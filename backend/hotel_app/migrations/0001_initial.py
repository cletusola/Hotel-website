# Generated by Django 4.1.6 on 2023-02-07 18:12

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Reservation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('room', models.CharField(max_length=90)),
                ('customer_name', models.CharField(max_length=90)),
                ('customer_email', models.EmailField(max_length=150)),
                ('customer_phone', models.CharField(max_length=20)),
                ('checkin', models.DateTimeField()),
                ('checkout', models.DateTimeField()),
                ('date_booked', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'ordering': ['-date_booked'],
            },
        ),
        migrations.CreateModel(
            name='Room',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=90)),
                ('image1', models.ImageField(upload_to='rooms/2023-02-07')),
                ('image2', models.ImageField(blank=True, null=True, upload_to='rooms/2023-02-07')),
                ('image3', models.ImageField(blank=True, null=True, upload_to='rooms/2023-02-07')),
                ('image4', models.ImageField(blank=True, null=True, upload_to='rooms/2023-02-07')),
                ('image5', models.ImageField(blank=True, null=True, upload_to='rooms/2023-02-07')),
                ('price', models.CharField(max_length=100)),
                ('description', models.TextField()),
                ('available', models.BooleanField(default=True)),
                ('date', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'ordering': ['-date'],
            },
        ),
    ]
