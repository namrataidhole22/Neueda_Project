from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
from model import be

# Initialize Flask app and enable CORS for specific origin
app = Flask(__name__)
CORS(app, origins=["http://localhost:5173"]) # Allow only this origin for CORS

# Read the CSV file into a pandas DataFrame
df = pd.read_csv('.\Dataset\credit_risk_dataset.csv')

# Data processing functions
def calculate_default_rate():
# Default rate where loan_status == 0 (defaulted)
default_rate = df['loan_status'].value_counts(normalize=True).get(0, 0) # 0 means defaulted
return default_rate

def calculate_age_distribution():
age_desc = df['person_age'].describe() # Descriptive statistics for age
return age_desc.to_dict()

def calculate_income_vs_loan():
income_loan = df[['person_income', 'loan_amnt']].dropna() # Removing any rows with missing data
return income_loan.describe().to_dict()

def calculate_homeownership_default_rate():
homeownership_default = df.groupby('person_home_ownership')['loan_status'].apply(lambda x: (x == 0).mean()).reset_index()
return homeownership_default.to_dict(orient='records')

def calculate_employment_length_default_rate():
df['cb_person_cred_hist_length'] = df['cb_person_cred_hist_length'].fillna('Unknown') # Handle missing employment length
employment_default = df.groupby('cb_person_cred_hist_length')['loan_status'].apply(lambda x: (x == 0).mean()).reset_index()
return employment_default.to_dict(orient='records')

# Route to get dashboard data
@app.route('/get_dashboard_data', methods=['GET'])
def get_dashboard_data():
# Get calculated values
default_rate = calculate_default_rate()
age_distribution = calculate_age_distribution()
income_loan_stats = calculate_income_vs_loan()
homeownership_default_rate = calculate_homeownership_default_rate()
employment_default_rate = calculate_employment_length_default_rate()

# Prepare the JSON data to return to the frontend
dashboard_data = {
"default_rate": default_rate,
"age_distribution": age_distribution,
"income_loan_stats": income_loan_stats,
"homeownership_default_rate": homeownership_default_rate,
"employment_default_rate": employment_default_rate
}

# Return data as JSON
return jsonify(dashboard_data)

# Route to get predictions based on user input
@app.route('/predict', methods=['POST'])
def predict():
data = request.json
# Prepare the input data
input_data = {
'person_age': [int(data['person_age'])],
'person_income': [int(data['person_income'])],
'person_home_ownership': [data['person_home_ownership']],
'person_emp_length': [float(data['person_emp_length'])],
'loan_intent': [data['loan_intent']],
'loan_grade': [data['loan_grade']],
'loan_amnt': [int(data['loan_amnt'])],
'loan_int_rate': [float(data['loan_int_rate'])],
'cb_person_default_on_file': [data['cb_person_default_on_file']],
'cb_person_cred_hist_length': [int(data['cb_person_cred_hist_length'])]
}
# Convert input data to DataFrame
sample_df = pd.DataFrame(input_data)

# Get prediction and cast to Python int
prediction = be.predict(sample_df)[0].item()

if prediction == 0:
return jsonify({'prediction': 'No risk detected'})
else:
return jsonify({'prediction': 'Risk detected'})

if __name__ == '__main__':
app.run(debug=True)




# from flask import Flask, request, jsonify
# import pandas as pd
# # from model import be
# from flask_cors import CORS

# app = Flask(__name__)
# CORS(app, origins=["http://localhost:5173"])
# df = pd.read_csv('.\Dataset\credit_risk_dataset.csv')

# Define prediction route
# @app.route('/predict', methods=['POST'])
# def predict():
# data = request.json
# input_data = {
# 'person_age': [int(data['person_age'])],
# 'person_income': [int(data['person_income'])],
# 'person_home_ownership': [data['person_home_ownership']],
# 'person_emp_length': [float(data['person_emp_length'])],
# 'loan_intent': [data['loan_intent']],
# 'loan_grade': [data['loan_grade']],
# 'loan_amnt': [int(data['loan_amnt'])],
# 'loan_int_rate': [float(data['loan_int_rate'])],
# 'cb_person_default_on_file': [data['cb_person_default_on_file']],
# 'cb_person_cred_hist_length': [int(data['cb_person_cred_hist_length'])]
# }

# # Convert input data to DataFrame
# sample_df = pd.DataFrame(input_data)

# # Get prediction and cast to Python int
# prediction = be.predict(sample_df)[0].item()

# return jsonify({'prediction': prediction})



# from flask import Flask, jsonify
# from flask_cors import CORS
# import pandas as pd

# # Initialize Flask app and enable CORS for specific origin
# app = Flask(__name__)
# CORS(app, origins=["http://localhost:5173"]) # Allow only this origin for CORS

# # Read the CSV file into a pandas DataFrame
# df = pd.read_csv('.\Dataset\credit_risk_dataset.csv')

# # 1.2. Default Rate Calculation
# def calculate_default_rate():
# # Default rate where loan_status == 0 (defaulted)
# default_rate = df['loan_status'].value_counts(normalize=True).get(0, 0) # 0 means defaulted
# return default_rate

# # 1.3 Age Distribution (Descriptive Statistics)
# def calculate_age_distribution():
# age_desc = df['person_age'].describe() # Descriptive statistics for age
# return age_desc.to_dict()

# # 1.4 Income vs Loan Amount (scatter data or insights)
# def calculate_income_vs_loan():
# income_loan = df[['person_income', 'loan_amnt']].dropna() # Removing any rows with missing data
# return income_loan.describe().to_dict()

# # 1.5 Homeownership vs Default Rate (loan_status vs homeownership)
# def calculate_homeownership_default_rate():
# homeownership_default = df.groupby('person_home_ownership')['loan_status'].apply(lambda x: (x == 0).mean()).reset_index()
# return homeownership_default.to_dict(orient='records')

# # 1.6 Employment Length vs Default Rate (loan_status vs employment_length)
# def calculate_employment_length_default_rate():
# df['cb_person_cred_hist_length'] = df['cb_person_cred_hist_length'].fillna('Unknown') # Handle missing employment length
# employment_default = df.groupby('cb_person_cred_hist_length')['loan_status'].apply(lambda x: (x == 0).mean()).reset_index()
# return employment_default.to_dict(orient='records')

# @app.route('/get_dashboard_data', methods=['GET'])
# def get_dashboard_data():
# # Get calculated values
# default_rate = calculate_default_rate()
# age_distribution = calculate_age_distribution()
# income_loan_stats = calculate_income_vs_loan()
# homeownership_default_rate = calculate_homeownership_default_rate()
# employment_default_rate = calculate_employment_length_default_rate()

# # Prepare the JSON data to return to the frontend
# dashboard_data = {
# "default_rate": default_rate,
# "age_distribution": age_distribution,
# "income_loan_stats": income_loan_stats,
# "homeownership_default_rate": homeownership_default_rate,
# "employment_default_rate": employment_default_rate
# }

# # Return data as JSON
# return jsonify(dashboard_data)

# if __name__ == '__main__':
# app.run(debug=True)
