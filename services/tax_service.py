def calculate_tax(price, city):
    city_tax = {
        "Delhi": 0.10,
        "Mumbai": 0.12,
        "Bangalore": 0.11,
        "Default": 0.09
    }
    return price * city_tax.get(city, city_tax["Default"])
