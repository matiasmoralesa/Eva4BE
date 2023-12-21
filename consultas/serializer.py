from rest_framework import serializers
from .models import Consulta
from pacientes.models import Paciente
from doctores.models import Doctor

class PacienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Paciente
        fields = ['nombre']  # Asegúrate de incluir todos los campos necesarios

class DoctorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctor
        fields = ['nombre']  # Asegúrate de incluir todos los campos necesarios

class ConsultaSerializer(serializers.ModelSerializer):
    paciente_nombre = serializers.ReadOnlyField(source='paciente.nombre')
    doctor_nombre = serializers.ReadOnlyField(source='doctor.nombre')

    class Meta:
        model = Consulta
        fields = ['id', 'paciente', 'paciente_nombre', 'doctor', 'doctor_nombre', 'fecha', 'sexo', 'hora', 'nivel_riesgo', 'motivo']
