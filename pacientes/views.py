from rest_framework import viewsets
from serializer import PacienteSerializer
from .models import Paciente

class ConsultaView(viewsets.ModelViewSet):
    serializer_class = PacienteSerializer
    queryset = Paciente.objects.all()
