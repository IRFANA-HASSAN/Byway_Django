# from django.contrib import admin

# # Register your models here.
# from .models import CategorySection

# @admin.register(CategorySection)
# class CategorySectionAdmin(admin.ModelAdmin):
#     list_display = ('title', 'count')

from django.contrib import admin
from .models import CategorySection, CategoryCard

class CategoryCardInline(admin.TabularInline):
    model = CategoryCard
    extra = 1

@admin.register(CategorySection)
class CategorySectionAdmin(admin.ModelAdmin):
    list_display = ('title', 'count')
    inlines = [CategoryCardInline]

@admin.register(CategoryCard)
class CategoryCardAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'link')
