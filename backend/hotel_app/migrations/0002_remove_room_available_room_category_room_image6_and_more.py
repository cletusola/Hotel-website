# Generated by Django 4.1.6 on 2023-02-10 08:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hotel_app', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='room',
            name='available',
        ),
        migrations.AddField(
            model_name='room',
            name='category',
            field=models.CharField(blank=True, choices=[('Single Room', 'Single Room'), ('Twin Room', 'Twin Room'), ('Studio Room', 'Studio Room'), ('Suite', 'Suite')], default='Single Room', max_length=20, null=True),
        ),
        migrations.AddField(
            model_name='room',
            name='image6',
            field=models.ImageField(blank=True, null=True, upload_to='rooms/2023-02-10'),
        ),
        migrations.AddField(
            model_name='room',
            name='image7',
            field=models.ImageField(blank=True, null=True, upload_to='rooms/2023-02-10'),
        ),
        migrations.AlterField(
            model_name='room',
            name='image1',
            field=models.ImageField(upload_to='rooms/2023-02-10'),
        ),
        migrations.AlterField(
            model_name='room',
            name='image2',
            field=models.ImageField(upload_to='rooms/2023-02-10'),
        ),
        migrations.AlterField(
            model_name='room',
            name='image3',
            field=models.ImageField(upload_to='rooms/2023-02-10'),
        ),
        migrations.AlterField(
            model_name='room',
            name='image4',
            field=models.ImageField(blank=True, null=True, upload_to='rooms/2023-02-10'),
        ),
        migrations.AlterField(
            model_name='room',
            name='image5',
            field=models.ImageField(blank=True, null=True, upload_to='rooms/2023-02-10'),
        ),
    ]
