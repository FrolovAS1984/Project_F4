
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers

from App.views import CategoryApiView, DishesApiView, dishes_view

router = routers.DefaultRouter()
router.register(r'api/categories', CategoryApiView)
router.register(r'api/recipes', DishesApiView)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path('api/dishes/', dishes_view)
]
