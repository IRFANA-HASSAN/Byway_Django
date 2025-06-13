from django.urls import path
from .views import category_section_list, product_view, product_details_view

urlpatterns = [
    path('', category_section_list, name='index'), 
    path('product/', product_view, name='product'),
    path('category/<int:category_id>/', product_details_view, name='product_details'),
]

