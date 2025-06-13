
# from django.db import models

# class CategorySection(models.Model):
#     title = models.CharField(max_length=100)
#     img = models.FileField(upload_to='category_images/')
#     count = models.PositiveIntegerField(default=0)

#     def __str__(self):
#         return self.title
from django.db import models

class CategorySection(models.Model):
    title = models.CharField(max_length=100)
    img = models.FileField(upload_to='category_images/')
    count = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.title


class CategoryCard(models.Model):
    category = models.ForeignKey(CategorySection, on_delete=models.CASCADE, related_name='cards')
    title = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    image = models.ImageField(upload_to='category_cards/')
    link = models.URLField(blank=True, help_text="Optional link for the card")

    def __str__(self):
        return f"{self.title} ({self.category.title})"
