from flask import Flask
from .middleware import apply_cors

def create_app():
    app = Flask(__name__)
    apply_cors(app)
    return app