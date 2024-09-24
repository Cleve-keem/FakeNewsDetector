from flask import Flask, jsonify, request
from flask_cors import CORS
import pickle as pkl
import logging
import pandas as pd
from sklearn.svm import LinearSVC
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.model_selection import train_test_split
# from nltk.tokenize import word_tokenize  # Example if you're using NLTK


app = Flask(__name__)
CORS(app)  # Enable Cross-Origin Resource Sharing for the React frontend

vectorizer = TfidfVectorizer()
model = LinearSVC()

# Function to train the model and save both model and vectorizer
def train_and_save_model():
    global model, vectorizer

    # Load your dataset (Replace with the actual path to your dataset)
    data = pd.read_csv('train.csv')
    
    # Fill missing values
    data['text'] = data['text'].fillna('')
    data['title'] = data['title'].fillna('')
    
    # Prepare the input and output
    x = data["title"] + " " + data["text"]
    y = data['label']

    # Vectorize the text data
    vectorizer = TfidfVectorizer()
    vectors = vectorizer.fit_transform(x)

    # Split the data into training sets
    xtrain,ytrain, = train_test_split(vectors, y, test_size =.2, random_state =42)
    # X_train, X_test, y_train, y_test = train_test_split(X_transformed, y, test_size=0.2, random_state=42)

    # Train the model
    model = LinearSVC()
    model.fit(xtrain, ytrain)

    # Save the trained model and vectorizer
    with open('model.pkl', 'wb') as model_file:
        pkl.dump(model, model_file)

    with open('vectorizer.pkl', 'wb') as vec_file:
        pkl.dump(vectorizer, vec_file)

    print("Model and vectorizer trained and saved successfully!")


# Load the model and vectorizer from the file
def load_model():
    global model, vectorizer

    try:
        with open('model.pkl', 'rb') as model_file:
            model = pkl.load(model_file)
        with open('vectorizer.pkl', 'rb') as vec_file:
            vectorizer = pkl.load(vec_file)
        print("Model and vectorizer loaded successfully!")
    except Exception as e:
        logging.error("Error loading model or vectorizer: %s", str(e))
        model = None
        vectorizer = None

# Route for making predictions
@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        input_text = data.get('news')

        if not input_text:
            raise ValueError("No 'news' key found in the input JSON")

        if model is None or vectorizer is None:
            raise RuntimeError("Model or vectorizer not loaded successfully")

        # Use vectorizer to preprocess the input
        input_transformed = vectorizer.transform([input_text])
        prediction = model.predict(input_transformed)[0]

        # Convert numpy.int64 to Python int before returning the response
        prediction = int(prediction)

        return jsonify({'prediction': prediction})
    except Exception as e:
        logging.error("Error during prediction: %s", str(e))
        return jsonify({'error': str(e)}), 500


# Route for retraining the model
@app.route('/retrain', methods=['POST'])
def retrain():
    try:
        train_and_save_model()  # Call the retrain function
        return jsonify({'status': 'Model retrained and saved successfully'})
    except Exception as e:
        logging.error("Error during retraining: %s", str(e))
        return jsonify({'error': str(e)}), 500


if __name__ == '__main__':
    # Load the model and vectorizer
    load_model()

    # Run the Flask app
    app.run(debug=True)
