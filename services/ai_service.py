import os
from dotenv import load_dotenv
import openai

# Load variables from .env
load_dotenv()

# Assign API key to OpenAI client
openai.api_key = os.getenv("OPENAI_API_KEY")

def get_ai_response(message):
    try:
        response = openai.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": message}],
            max_tokens=150
        )
        return response.choices[0].message.content.strip()
    except Exception as e:
        return f"Error contacting AI: {e}"
