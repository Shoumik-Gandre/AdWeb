from django.urls import path
from . import views

urlpatterns = [
    path('', views.landing, name='landing'),
    path('home', views.AdvertisementListView.as_view(), name='index'),
    path('advertisement/<int:pk>/',
         views.AdvertisementDetailView.as_view(), name='detail'),
    path('advertisement/upload/',
         views.AdvertisementCreateView.as_view(), name='upload'),
    path('advertisement/<int:pk>/update/',
         views.AdvertisementUpdateView.as_view(), name='update'),
    path('advertisement/<int:pk>/delete/',
         views.AdvertisementDeleteView.as_view(), name='delete'),
    path('dashboard/', views.dashboard, name='dashboard'),
    path('api/<str:size>/<str:user_key>', views.api, name='api'),
    path('api/advertisement/<int:pk>/<int:site_pk>', views.ad_redir, name='ad_redir'),
    path('about/',views.about,name = 'about')
    # path('success/', views.success, name='success')
]
