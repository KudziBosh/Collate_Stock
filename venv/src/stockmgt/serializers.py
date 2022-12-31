from rest_framework import serializers
from .models import *

class StockSerializer(serializers.ModelSerializer):
    class Meta:
        model=Stock
        fields = fields = ['category', 'item_name', 'quantity','created_by',
                            'reorder_level','last_updated','timestamp','date']
                        # 'price']