from django.urls import path,include
from .views import *

urlpatterns = [
    path('', inicio,name='inicio'),
    path('bonosInicio/', bonosInicio,name='bonosInicio'),
    path('beneficiosInicio/', beneficiosInicio,name='beneficiosInicio'),
    path('nosotros/', nosotros,name='nosotros'),
    path('contactanos/', contactanos,name='contactanos'),
    path('administracion/', administracion,name='administracion'),
    path('agendar/', agendar,name='agendar'),
    path('noticias/', noticias,name='noticias'),
    path('conveniosMetropolitanos/', conveniosMetropolitanos,name='conveniosMetropolitanos'),
    path('conveniosRegiones/', conveniosRegiones,name='conveniosRegiones'),
]
