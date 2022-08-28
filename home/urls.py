from . import views
from django.urls import path

urlpatterns = [
    path('', views.home, name="home"),
    path('home', views.home, name="home"),
    path('about/', views.about, name="about"),
    path('contact', views.contact, name="contact"),
    path('services/', views.services, name="services"),
    path('signup', views.signup, name="signup"),
    path('signin', views.signin, name="signin"),
    path('signout', views.signout, name="signout"),
]
