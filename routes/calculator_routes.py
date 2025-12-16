from flask import Blueprint, render_template, request

calculator_blueprint = Blueprint(
    "calculator",
    __name__
)

# -----------------------------
# Tax slabs (city-based)
# -----------------------------
STATE_TAX_RATES = {
    "default": 0.10,
    "delhi": 0.08,
    "mumbai": 0.11,
    "bangalore": 0.13,
    "chennai": 0.12,
    "hyderabad": 0.10,
    "jodhpur": 0.10,
    "jaipur": 0.10
}

# -----------------------------
# Insurance calculation
# -----------------------------
def calculate_insurance(ex_price):
    if ex_price <= 500000:
        return 18000
    elif ex_price <= 1000000:
        return 30000
    else:
        return 45000

# -----------------------------
# Main Calculator Route
# -----------------------------
@calculator_blueprint.route("/calculate", methods=["POST"])
def calculate():
    try:
        # DEBUG: Check incoming form data
        print("FORM DATA:", request.form)

        price_raw = request.form.get("price")
        city_raw = request.form.get("city")

        if not price_raw or not city_raw:
            raise ValueError("Price or City missing")

        price = float(price_raw)
        city = city_raw.strip().lower()

        if price <= 0:
            raise ValueError("Price must be greater than zero")

        tax_rate = STATE_TAX_RATES.get(city, STATE_TAX_RATES["default"])
        tax = round(price * tax_rate)
        insurance = calculate_insurance(price)
        on_road_price = round(price + tax + insurance)

        return render_template(
            "result.html",
            price=f"{price:,.0f}",
            city=city.title(),
            tax=f"{tax:,.0f}",
            insurance=f"{insurance:,.0f}",
            on_road_price=f"{on_road_price:,.0f}"
        )

    except Exception as e:
        print("CALCULATION ERROR:", str(e))
        return render_template(
            "result.html",
            error=str(e)
        )
