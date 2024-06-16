from django.shortcuts import render
from .models import Menu
from .models import VisionMision
from .models import Facultad
from .models import Programa

def about(request):
    menu_items = Menu.objects.all()
    vision_mision_items = VisionMision.objects.all()
    facultades = Facultad.objects.all()
    programas_por_facultad = {}
    
    for facultad in facultades:
        programas = Programa.objects.filter(facultad=facultad)
        programas_por_facultad[facultad] = programas
        
    return render(request, 'about.html', {'menu_items': menu_items, 'vision_mision_items': vision_mision_items,'programas_por_facultad': programas_por_facultad})