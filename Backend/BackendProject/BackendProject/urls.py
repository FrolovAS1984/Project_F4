
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers

from rest_framework.schemas import get_schema_view
from django.views.generic import TemplateView

from App.views import CategoryApiView, DishesApiView, dishes_view

router = routers.DefaultRouter()
router.register(r'api/categories', CategoryApiView)
router.register(r'api/recipes', DishesApiView)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path('api/dishes/', dishes_view),
    path('openapi/', get_schema_view(
        title="Django Rest API",
        description="API description",
        version="1.0.0"
    ), name='openapi-schema'),
    path('swagger-ui/', TemplateView.as_view(
        template_name='swagger-ui.html',
        extra_context={'schema_url': 'openapi-schema'}
    ),
         name='swagger-ui'),

]
