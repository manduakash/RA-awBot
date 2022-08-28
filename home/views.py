from email import message
import email
from email.headerregistry import ContentTransferEncodingHeader
from unicodedata import name
from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from home.models import Contact
from django.contrib import messages

# Create your views here.
def home(request):
    return render (request, "index.html")

def about(request):
    return render (request, "about.html")

def services(request):
    return render (request, "services.html")

def contact(request):
    if request.method == 'POST':
         name=request.POST.get('name')
         email=request.POST.get('email')
         subject=request.POST.get('subject')
         message=request.POST.get('message')
         contact = Contact(name=name, email=email, subject=subject, message=message)
         contact.save()
         messages.success(request, "Your message has been sent successfully!")
         return redirect('home')
    else:
        return render (request, "index.html")

def signup(request):
    #getting datas from signup form
    if request.method =='POST':
        username=request.POST.get('username')
        email=request.POST.get('email')
        pass1=request.POST.get('pass1')
        pass2=request.POST.get('pass2')


        if (len(username)>15):
            messages.error(request, "You are taking too long username, Use upto 15 characters!")
            return redirect('/signup')

        if (len(pass1)<8) or (len(pass1)<16) :
            messages.error(request, "Use minimum 8 and maximum 16 characters in your password!")
            return redirect('/signup')

        if (username==pass1):
            messages.error(request, "Username and password can not be same!")
            return redirect('/signup')

        if (email==pass1):
            messages.error(request, "Email and password can not be same!")
            return redirect('/signup')

        if User.objects.filter(username=username).exists():
            messages.error(request, "This username is already taken, Try another username using alphabets and numburs!")
            return redirect('/signin')

        if User.objects.filter(email=email).exists():
            messages.error(request, "This email is already taken try another email!")
            return redirect('/signup')

        if pass1!=pass2:
            messages.error(request, "Your password and Confirm password is not matched!")
            return redirect('/signup')

        else:
            user = User.objects.create_user(username, email, pass1)
            user.save()

            messages.success(request, "Your account has been successfully created, Please sign in to continue!")
            return redirect('/signin')
    else:
       return render(request, "signup.html")



def signin(request):

    if request.method =='POST':
        username=request.POST.get('username')
        password=request.POST.get('password')

        user=authenticate(username=username, password=password)

        # if User.objects.filter(email=email).exists():
        #     messages.error(request, "Your email is wrong, Please try correct one!")
        #     return redirect('/signin')
        # if User.objects.filter(password=pass1).exists():
        #     messages.error(request, "Your password is wrong, Please try correct one!")
        #     return redirect('/signin')
        if user is not None:
            login(request, user)
            messages.success(request, "You are successfully Logged In!")
            return redirect('home')

        else:
            messages.error(request, "You entered invailid credentials, Please enter current username and password!")
            return redirect('/signin')

    else:
        return render (request, "signin.html")

def signout(request):

    logout(request)
    messages.success(request, "You are successfully Logged Out!")
    return redirect('/')


