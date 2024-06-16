from django.db import models

# Create your models here.

class Menu(models.Model):
    valor = models.CharField(max_length=100)

    def _str_(self):
        return self.valor


class VisionMision(models.Model):
    tema = models.CharField(max_length=100)
    descripcion = models.CharField(max_length=1000)

    def _str_(self):
        return self.tema
    
class Facultad(models.Model):
    nombre = models.CharField(max_length=100)

    def _str_(self):
        return self.nombre
    
class Programa(models.Model):
    nombre = models.CharField(max_length=100)
    facultad = models.ForeignKey(Facultad, on_delete=models.CASCADE)

    def _str_(self):
        return self.nombre