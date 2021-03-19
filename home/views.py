from django.shortcuts import render


def index(request):
    """
    Website home page.
    """
    context = {}
    return render(request, 'home/index.html', context)
