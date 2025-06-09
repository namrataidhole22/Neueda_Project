from flask import Flask, jsonify
from flask_cors import CORS
import pandas as pd

app = Flask(__name__)

# Enable CORS only for the frontend origin
CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})

# Load the dataset once at startup
df = pd.read_csv('./LoanApproval/Dataset/credit_risk_dataset.csv')
@app.route('/get_default_rate', methods=['GET'])
def get_default_rate():
    # Assuming 'loan_status' column: 0 = default, 1 = paid
    total_loans = len(df)
    default_loans = (df['loan_status'] == 0).sum()
    default_rate = default_loans / total_loans if total_loans > 0 else 0
    return jsonify({'default_rate': default_rate})

if __name__ == '__main__':
    app.run(debug=True)