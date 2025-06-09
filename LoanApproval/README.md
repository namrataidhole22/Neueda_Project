# Loan Approval System

## Overview
The Loan Approval System is a full-stack application designed to assess credit risk for loan applications using a machine learning model. This project consists of a Flask backend that handles API requests and a React frontend for user interaction.

## Project Structure
```
CreditRiskProject/
├── flask_app.py               # Main entry point for the Flask application
├── model.py                   # Logic for loading and using the machine learning model
├── random_forest_model.pkl    # Trained Random Forest model file
├── Dataset/
│   └── credit_risk_dataset.csv # Dataset for training the model
└── Loan Approval System/
    ├── package.json           # Configuration file for npm dependencies
    ├── vite.config.js         # Configuration settings for Vite
    ├── public/
    │   └── index.html         # Main HTML file for the front-end application
    └── src/
        ├── App.jsx            # Main React component for the application
        ├── main.jsx           # Entry point for the React application
        └── components/
            └── CreditRiskForm.jsx # Component for collecting user input
```

## Setup Instructions

### Backend Setup
1. Ensure you have Python installed on your machine.
2. Install the required packages:
   ```
   pip install Flask
   ```
3. Run the Flask application:
   ```
   python flask_app.py
   ```

### Frontend Setup
1. Navigate to the `Loan Approval System` directory.
2. Install the required npm packages:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```

## Usage
- Access the frontend application in your web browser at `http://localhost:3000`.
- Fill out the loan application form to assess credit risk.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.