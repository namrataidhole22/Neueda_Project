from flask import Flask, request, jsonify
from model import predict_credit_risk

app = Flask(__name__)

@app.route('/api/loan-approval', methods=['POST'])
def loan_approval():
    data = request.json
    # Here you would typically validate the input data
    prediction = predict_credit_risk(data)
    return jsonify({'approval': prediction})

if __name__ == '__main__':
    app.run(debug=True)