from django.shortcuts import render, redirect

def inicio(request):
	return render( request, 'core/inicio.html' )
def bonosInicio(request):
	return render( request, 'core/bonos/bonosInicio.html' )
def beneficiosInicio(request):
	return render( request, 'core/beneficios/beneficiosInicio.html' )
def administracion(request):
	return render( request, 'core/administracion/administracion.html' )
def agendar(request):
	return render( request, 'core/agendar/agendar.html' )
def noticias(request):
	return render( request, 'core/noticias/noticias.html' )


def conveniosMetropolitanos(request):
	return render( request, 'core/convenios/conveniosMetropolitanos.html' )
def conveniosRegiones(request):
	return render( request, 'core/convenios/conveniosRegiones.html' )


def beneficiosMortuarioo(request):
	return render( request, 'core/beneficios/beneficioMortuario.html' )
def beneficiosHospedaje(request):
	return render( request, 'core/beneficios/beneficioHospedaje.html' )
def beneficiosIncendio(request):
	return render( request, 'core/beneficios/beneficioIncendio.html' )
def nosotros(request):
	return render( request, 'core/nosotros/nosotros.html' )
def contactanos(request):
	return render( request, 'core/contactanos/contactanos.html' )