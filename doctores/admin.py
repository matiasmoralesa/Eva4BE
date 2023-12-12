from django.contrib import admin
from .models import Doctor

class DoctorAdmin(admin.ModelAdmin):
    list_display = ['nombre', 'rut', 'telefono', 'correo', 'especialidad', 'turno']

admin.site.register(Doctor, DoctorAdmin)