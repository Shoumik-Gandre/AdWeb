# Generated by Django 3.0.4 on 2020-05-11 13:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('adtool', '0010_auto_20200430_1903'),
    ]

    operations = [
        migrations.AlterField(
            model_name='advertisement',
            name='size',
            field=models.CharField(choices=[('medium rectangle', '300x250 pixels'), ('large rectangle', '336x280 pixels'), ('leaderboard', '728x90 pixels'), ('half page', '320x600 pixels'), ('free size', 'free size')], default='free size', max_length=16),
        ),
    ]
