# services/onroad_engine.py

def calculate_onroad_price(ex_showroom_price: float, state: str) -> dict:
    """
    Core engine to calculate on-road price based on state-wise rules.
    Returns a detailed price breakdown.
    """

    # -----------------------------
    # RTO TAX RULES (India - Simplified)
    # -----------------------------
    rto_tax_rules = {
        "Rajasthan": 0.10,
        "Maharashtra": 0.11,
        "Delhi": 0.08,
        "Gujarat": 0.09,
        "Karnataka": 0.18,
        "Uttar Pradesh": 0.10,
        "Default": 0.10
    }

    # -----------------------------
    # INSURANCE & FIXED COSTS
    # -----------------------------
    insurance_rate = 0.03      # 3% of ex-showroom
    handling_charges = 5000    # fixed

    # -----------------------------
    # Resolve RTO Tax
    # -----------------------------
    rto_rate = rto_tax_rules.get(state, rto_tax_rules["Default"])

    rto_tax = ex_showroom_price * rto_rate
    insurance_cost = ex_showroom_price * insurance_rate

    onroad_price = (
        ex_showroom_price +
        rto_tax +
        insurance_cost +
        handling_charges
    )

    # -----------------------------
    # RETURN BREAKDOWN
    # -----------------------------
    return {
        "ex_showroom_price": round(ex_showroom_price, 2),
        "state": state,
        "rto_tax": round(rto_tax, 2),
        "insurance": round(insurance_cost, 2),
        "handling_charges": handling_charges,
        "onroad_price": round(onroad_price, 2)
    }
