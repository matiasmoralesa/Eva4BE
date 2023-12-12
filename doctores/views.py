from rest_framework import viewsets
from .serializer import DoctorSerializer
from .models import Doctor

class DoctorView(viewsets.ModelViewSet):
    serializer_class = DoctorSerializer
    queryset = Doctor.objects.all()



