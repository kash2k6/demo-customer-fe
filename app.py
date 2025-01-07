from flask import Flask, request, jsonify
import requests
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

DUFFEL_API_KEY = os.getenv('DUFFEL_API_KEY', 'your_default_api_key_here')

@app.route('/duffel-flights-list-offers', methods=['POST'])
def duffel_flights_list_offers():
    headers = {
        "Accept-Encoding": "gzip",
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Duffel-Version": "v2",
        "Authorization": f"Bearer {DUFFEL_API_KEY}"
    }
    data = request.json
    response = requests.post('https://api.duffel.com/air/offer_requests', headers=headers, json=data)
    return jsonify(response.json()), response.status_code

if __name__ == '__main__':
    app.run(port=5000)