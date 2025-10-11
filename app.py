from flask import Flask, render_template
from routes.calculator_routes import calculator_blueprint
from routes.ai_routes import ai_blueprint

app = Flask(__name__)

app.register_blueprint(calculator_blueprint)
app.register_blueprint(ai_blueprint)

@app.route('/')
def home():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
