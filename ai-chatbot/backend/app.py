from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS
import requests
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Your Gemini API Key stored in .env
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
GEMINI_API_URL = "https://api.gemini.com/v1/your-endpoint"  # Replace with actual Gemini API URL

@app.route('/generate', methods=['POST'])
def generate_question():
    try:
        data = request.get_json()
        prompt = data.get('prompt')

        if not prompt:
            return jsonify({'status': 'error', 'message': 'Prompt is missing'}), 400

        # Call Gemini AI API
        headers = {
            'Authorization': f'Bearer {GEMINI_API_KEY}',
            'Content-Type': 'application/json'
        }
        payload = {
            'prompt': prompt,  # Adjust to the format expected by Gemini API
            'max_tokens': 100, # Example parameter; adjust as needed
        }

        response = requests.post(GEMINI_API_URL, json=payload, headers=headers)

        if response.status_code == 200:
            output = response.json()  # Assuming the API returns a JSON response
            return jsonify({'status': 'success', 'questions': output['data']}), 200
        else:
            return jsonify({'status': 'error', 'message': 'Failed to fetch data from Gemini API'}), response.status_code

    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
