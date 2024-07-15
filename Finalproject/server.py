from flask import Flask, request, jsonify
from flask_cors import CORS # Import CORS from flask_cors

app = Flask(__name__)
CORS(app) # This will enable CORS for all routes

@app.route('/predict', methods=['POST'])
def predict():
    # Get data from the request
    data = request.get_json()
    print(data)

    # Extract the 'name' feature from the data
    name_feature = data.get('formData', {})
    print(name_feature)

    # Assuming you have a model and you want to use 'name_feature' to make a prediction
    # For demonstration, let's just return the received feature
    prediction = name_feature

    # Return the prediction as json
    return jsonify({'prediction': prediction})

if __name__ == '__main__':
    app.run(debug=True)