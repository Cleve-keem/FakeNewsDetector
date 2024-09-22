from flask import Flask, jsonify, request
from flask_cors import CORS
import pickle as pkl
import logging

app = Flask(__name__)
CORS(app)  # Enable Cross-Origin Resource Sharing for the React frontend

# Load the model from the file (no vectorizer)
def load_model():
    global model
    try:
        with open('model.pkl', 'rb') as model_file:
            model = pkl.load(model_file)
        print("Model loaded successfully!")
    except Exception as e:
        logging.error("Error loading model: %s", str(e))
        model = None

# home rount
@app.route('/')
def home():
    return "The flask is working"

# Route for making predictions
@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        input_text = data.get('news')

        if not input_text:
            raise ValueError("No 'news' key found in the input JSON")

        if model is None:
            raise RuntimeError("Model not loaded successfully")

        # Directly use the model for prediction (assuming the model handles preprocessing)
        prediction = model.predict([input_text])[0]

        return jsonify({'prediction': prediction})
    except Exception as e:
        logging.error("Error during prediction: %s", str(e))
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    # Load the model (no vectorizer)
    load_model()

    # Run the Flask app
    app.run(debug=True)
