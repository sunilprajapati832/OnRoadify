from flask import Blueprint, request, render_template
from services.tax_service import calculate_tax
from services.insurance_service import calculate_insurance

calculator_blueprint = Blueprint('calculator', __name__)

@calculator_blueprint.route('/calculate', methods=['POST'])
def calculate():
    try:
        price = float(request.form['price'])
        city = request.form['city']

        tax = calculate_tax(price, city)
        insurance = calculate_insurance(price)
        on_road_price = price + tax + insurance

        # Pass variables to template
        return render_template(
            'result.html',
            on_road_price=round(on_road_price, 2),
            tax=round(tax, 2),
            insurance=round(insurance, 2),
            price=price,
            city=city
        )
    except Exception as e:
        return f"Error: {e}"
