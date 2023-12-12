from django.urls import path, include
from rest_framework import routers
from doctores import views

router = routers.DefaultRouter()
router.register(r'docotores', views.DoctorView, 'Doctores')

urlpatterns = [
    path('api/v1/', include(router.urls))
]