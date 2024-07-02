"""
WSGI config for MockUpPagina project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/
"""

import os
from django.core.wsgi import get_wsgi_application
import WhiteNoise
from settings import *
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'MockUpPagina.settings')

application = get_wsgi_application()
application = WhiteNoise(application, root=os.path.join(BASE_DIR, 'staticfiles'))
