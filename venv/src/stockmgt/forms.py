from django import forms
from .models import Stock, StockHistory


class StockCreateForm(forms.ModelForm):
   class Meta:
     model = Stock
     fields = ['category', 'item_name', 'quantity']

   def clean_category(self):
     category = self.cleaned_data.get('category')
     if not category:
       raise forms.ValidationError('This field is required')
     
     for instance in Stock.objects.all():
       if instance.category==category:
        #  raise forms.ValidationError(category+" has already been created")
        return category


	
   def clean_item_name(self):
     item_name = self.cleaned_data.get('item_name')
     if not item_name:
       raise forms.ValidationError('This field is required')
     return item_name

class StockSearchForm(forms.ModelForm):
   export_to_CSV = forms.BooleanField(required=False)
   class Meta:
     model = Stock
     fields = ['category', 'item_name'] 
     
class StockUpdateForm(forms.ModelForm):
	class Meta:
		model = Stock
		fields = ['category', 'item_name', 'quantity']
  
  
class IssueForm(forms.ModelForm):
	class Meta:
		model = Stock
		fields = ['issue_quantity']


class ReceiveForm(forms.ModelForm):
	class Meta:
		model = Stock
		fields = ['receive_quantity']
  
class ReorderLevelForm(forms.ModelForm):
	class Meta:
		model = Stock
		fields = ['reorder_level']
  
class StockHistorySearchForm(forms.ModelForm):
	export_to_CSV = forms.BooleanField(required=False)
	start_date = forms.DateTimeField(required=False)
	end_date = forms.DateTimeField(required=False)
	class Meta:
		model = StockHistory
		fields = ['category', 'item_name', 'start_date', 'end_date']

class DateRange(forms.ModelForm):
	start_date = forms.DateTimeField(required=False)
	end_date = forms.DateTimeField(required=False)
	class Meta:
		model = StockHistory
		fields = ['start_date', 'end_date']