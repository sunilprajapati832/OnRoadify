from flask import Blueprint, request, jsonify
from services.ai_service import get_ai_response

ai_blueprint = Blueprint('ai', __name__)

@ai_blueprint.route('/chat', methods=['POST'])
def chat():
    user_message = request.json['message']
    response = get_ai_response(user_message)
    return jsonify({'reply': response})
