from django.shortcuts import render


def myview(request):
    return render(request, 'keys.html')