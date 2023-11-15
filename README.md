# Django Stock Control System

This is a Django-based stock control system designed to help manage inventory and track stock levels. It provides a web interface for users to perform various stock-related operations such as adding products, updating quantities, and generating reports.

## Features

- User authentication and access control: Only authorized users can access the stock control system.
- Product management: Add, update, and delete products with associated details such as name, description, and price.
- Stock tracking: Track the quantity of each product in stock.
- Stock movement: Record stock movements such as purchases, sales, and returns.
- Reports: Generate reports on stock levels, stock movements, and product sales.

## Installation

1. Clone the repository:

   ````shell
   git clone https://github.com/your-username/django-stock-control.git
   ```

2. Navigate to the project directory:

   ````shell
   cd django-stock-control
   ```

3. Create and activate a virtual environment (optional but recommended):

   ````shell
   python3 -m venv env
   source env/bin/activate
   ```

4. Install the dependencies:

   ````shell
   pip install -r requirements.txt
   ```

5. Apply database migrations:

   ````shell
   python manage.py migrate
   ```

6. Create a superuser account:

   ````shell
   python manage.py createsuperuser
   ```

7. Start the development server:

   ````shell
   python manage.py runserver
   ```

8. Access the stock control system in your web browser at `http://localhost:8000`.

## Configuration

The stock control system uses the default Django settings, but you can customize them by modifying the `settings.py` file in the project's root directory.

Key settings you might want to customize include the database configuration, static files configuration, and email settings.

## Usage

1. Access the stock control system in your web browser at `http://localhost:8000`.

2. Login using your superuser account or create a new account if necessary.

3. Use the provided interface to manage products, track stock levels, record stock movements, and generate reports.

## Contributing

Contributions to the Django Stock Control System are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the GitHub repository.

When contributing, please follow the existing coding style and ensure that your changes are well-documented.


## Acknowledgments

This stock control system was built using the Django web framework. Special thanks to the Django community for their excellent documentation and the numerous packages available to enhance Django applications.

## Contact

For any questions or inquiries, please contact admin@kudzaibosha.com).
