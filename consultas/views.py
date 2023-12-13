from rest_framework import viewsets
from .serializer import ConsultaSerializer
from .models import Consulta

class ConsultaView(viewsets.ModelViewSet):
    serializer_class = ConsultaSerializer
    queryset = Consulta.objects.all()

