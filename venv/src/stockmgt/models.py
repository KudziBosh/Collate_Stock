from django.db import models


category_choice = (
    ('Belts', 'Belts'),
    ('Shoes', 'Shoes'),
    ('Trousers', 'Trousers'),
)
# Create your models here.


class Category(models.Model):
    name = models.CharField(max_length=50, blank=True, null=True)

    def __str__(self):
        return self.name
    


class Store(models.Model):
    name = models.CharField(max_length=50, blank=True, null=True)
    address = models.CharField(max_length=50, blank=True, null=True)
    status=models.SmallIntegerField(blank=True,null=True)
    date_created=models.DateTimeField(auto_now=False, auto_now_add=True)
    date_updated=models.DateTimeField(auto_now_add=False, auto_now=True)


class Stock(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE, null=True, blank=True)
    label = models.CharField(max_length=50, blank=True, null=True)
    item_name = models.CharField(max_length=50, blank=True, null=True)
    quantity = models.IntegerField(default='0', blank=True, null=True)
    size= models.CharField(max_length=50, blank=True, null=True)
    receive_quantity = models.IntegerField(default='0', blank=True, null=True)
    receive_by = models.CharField(max_length=50, blank=True, null=True)
    issue_quantity = models.IntegerField(default='0', blank=True, null=True)
    issue_by = models.CharField(max_length=50, blank=True, null=True)
    issue_to = models.CharField(max_length=50, blank=True, null=True)
    phone_number = models.CharField(max_length=50, blank=True, null=True)
    created_by = models.CharField(max_length=50, blank=True, null=True)
    reorder_level = models.IntegerField(default='0', blank=True, null=True)
    last_updated = models.DateTimeField(auto_now_add=False, auto_now=True)
    timestamp = models.DateTimeField(auto_now=False, auto_now_add=True)
    date = models.DateTimeField(auto_now=False, auto_now_add=False, null=True)
    price = models.FloatField(default='0.00', blank=True, null=True)

    def __str__(self):
        return self.item_name


class users(models.Model):
    firstname = models.CharField(max_length=50, blank=True, null=True)
    middlename = models.CharField(max_length=50, blank=True, null=True)
    lastname = models.CharField(max_length=50, blank=True, null=True)
    username = models.CharField(max_length=15, blank=True, null=True)
    password = models.CharField(max_length=50, blank=True, null=True)
    avatar = models.CharField(max_length=100, blank=True, null=True)
    role = models.IntegerField(default='1', blank=True, null=True)
    date_added = models.DateTimeField(auto_now=False, auto_now_add=True)
    date_updated = models.DateTimeField(auto_now_add=False, auto_now=True)

    def __str__(self):
        return self.item_name


class StockHistory(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE, blank=True, null=True)
    label = models.CharField(max_length=50, blank=True, null=True)
    item_name = models.CharField(max_length=50, blank=True, null=True)
    quantity = models.IntegerField(default='0', blank=True, null=True)
    size= models.CharField(max_length=50, blank=True, null=True)
    receive_quantity = models.IntegerField(default='0', blank=True, null=True)
    receive_by = models.CharField(max_length=50, blank=True, null=True)
    issue_quantity = models.IntegerField(default='0', blank=True, null=True)
    issue_by = models.CharField(max_length=50, blank=True, null=True)
    issue_to = models.CharField(max_length=50, blank=True, null=True)
    phone_number = models.CharField(max_length=50, blank=True, null=True)
    created_by = models.CharField(max_length=50, blank=True, null=True)
    reorder_level = models.IntegerField(default='0', blank=True, null=True)
    last_updated = models.DateTimeField(
        auto_now_add=False, auto_now=False, null=True)
    timestamp = models.DateTimeField(
        auto_now_add=False, auto_now=False, null=True)
    
class Purchases(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE, blank=True, null=True)
    label = models.CharField(max_length=50, blank=True, null=True)
    item_name = models.CharField(max_length=50, blank=True, null=True)
    quantity = models.IntegerField(default='0', blank=True, null=True)
    size= models.CharField(max_length=50, blank=True, null=True)
    receive_quantity = models.IntegerField(default='0', blank=True, null=True)
    receive_by = models.CharField(max_length=50, blank=True, null=True)
    issue_quantity = models.IntegerField(default='0', blank=True, null=True)
    issue_by = models.CharField(max_length=50, blank=True, null=True)
    issue_to = models.CharField(max_length=50, blank=True, null=True)
    phone_number = models.CharField(max_length=50, blank=True, null=True)
    created_by = models.CharField(max_length=50, blank=True, null=True)
    reorder_level = models.IntegerField(default='0', blank=True, null=True)
    last_updated = models.DateTimeField(
        auto_now_add=False, auto_now=False, null=True)
    timestamp = models.DateTimeField(
        auto_now_add=False, auto_now=False, null=True)
    
class Sales(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE, blank=True, null=True)
    label = models.CharField(max_length=50, blank=True, null=True)
    item_name = models.CharField(max_length=50, blank=True, null=True)
    quantity = models.IntegerField(default='0', blank=True, null=True)
    size= models.CharField(max_length=50, blank=True, null=True)
    receive_quantity = models.IntegerField(default='0', blank=True, null=True)
    receive_by = models.CharField(max_length=50, blank=True, null=True)
    issue_quantity = models.IntegerField(default='0', blank=True, null=True)
    issue_by = models.CharField(max_length=50, blank=True, null=True)
    issue_to = models.CharField(max_length=50, blank=True, null=True)
    phone_number = models.CharField(max_length=50, blank=True, null=True)
    created_by = models.CharField(max_length=50, blank=True, null=True)
    reorder_level = models.IntegerField(default='0', blank=True, null=True)
    last_updated = models.DateTimeField(
        auto_now_add=False, auto_now=False, null=True)
    timestamp = models.DateTimeField(
        auto_now_add=False, auto_now=False, null=True)
