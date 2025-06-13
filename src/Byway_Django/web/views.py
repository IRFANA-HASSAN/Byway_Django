from django.shortcuts import render, get_object_or_404
from .models import CategorySection, CategoryCard

def index(request):
    categories = CategorySection.objects.all()
    return render(request, 'index.html', {'categories': categories})

# def product_view(request):
#     return render(request, 'Product.html')

def product_view(request):
    return render(request, 'Product.html')
from django.shortcuts import render

def product_view(request):
    return render(request, 'Product.html', {
        'social_platforms': ['Facebook', 'GitHub', 'Google', 'Twitter', 'Microsoft'],
    })
from .models import CategorySection

def category_section_list(request):
    categories = CategorySection.objects.all()
    return render(request, 'index.html', {'categories': categories})



def product_details_view(request, category_id):
    category = get_object_or_404(CategorySection, id=category_id)
    cards = CategoryCard.objects.filter(category=category)
    return render(request, 'Product_details.html', {
        'category': category,
        'cards': cards
    })
