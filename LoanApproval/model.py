import pandas as pd
import numpy as np
import pickle
# from sklearn.compose import ColumnTransformer
# from sklearn.pipeline import Pipeline
# from sklearn.model_selection import train_test_split, RandomizedSearchCV
# from sklearn.preprocessing import OneHotEncoder, StandardScaler
# from sklearn.experimental import enable_iterative_imputer
# from sklearn.impute import IterativeImputer
# from sklearn.linear_model import LinearRegression
# from sklearn.neighbors import KNeighborsRegressor
# from sklearn.ensemble import RandomForestClassifier, RandomForestRegressor
# from lightgbm import LGBMClassifier
# from sklearn.metrics import confusion_matrix

# df = pd.read_csv('.\Dataset\credit_risk_dataset.csv')
# # Remove duplicates
# df.drop_duplicates(inplace=True)

# # Split data
# X, X_test, y, y_test = train_test_split(df.drop('loan_status', axis=1), df['loan_status'],
#                                         random_state=0, test_size=0.2, stratify=df['loan_status'],
#                                         shuffle=True)

# # Drop unnecessary column
# X.drop('loan_percent_income', axis=1, inplace=True)
# X_test.drop('loan_percent_income', axis=1, inplace=True)

# # Filter out extreme values in 'person_age' and 'person_emp_length'
# X = X.loc[X['person_age'] < 80]
# X = X.loc[(X['person_emp_length'] < 66) | (X['person_emp_length'].isna())]
# y = y[X.index]  # Adjust `y` to match filtered `X`

# # Identify numerical and categorical columns
# num_cols = [col for col in X.columns if X[col].dtypes != 'O']
# cat_cols = [col for col in X.columns if X[col].dtypes == 'O']

# # Define pipelines
# num_pipe = Pipeline([
#     ('impute', IterativeImputer()),
#     ('scale', StandardScaler()),
# ])

# ct = ColumnTransformer([
#     ('num_pipe', num_pipe, num_cols),
#     ('cat_cols', OneHotEncoder(sparse_output=False, handle_unknown='ignore'), cat_cols)
# ], remainder='passthrough')

# # Define model parameter grid
# grid = {
#     RandomForestClassifier(random_state=0, n_jobs=-1, class_weight='balanced'): {
#         'model__n_estimators': [300, 400, 500],
#         'coltf__num_pipe__impute__estimator': [LinearRegression(), RandomForestRegressor(random_state=0),
#                                                KNeighborsRegressor()]
#     },
#     LGBMClassifier(class_weight='balanced', random_state=0, n_jobs=-1): {
#         'model__n_estimators': [300, 400, 500],
#         'model__learning_rate': [0.001, 0.01, 0.1, 1, 10],
#         'model__boosting_type': ['gbdt', 'goss', 'dart'],
#         'coltf__num_pipe__impute__estimator': [LinearRegression(), RandomForestRegressor(random_state=0),
#                                                KNeighborsRegressor()]
#     },
# }

# best_algos = {}

# # Iterate over classifiers and perform RandomizedSearchCV
# for clf, param in grid.items():
#     pipe = Pipeline([
#         ('coltf', ct),
#         ('model', clf)
#     ])

#     gs = RandomizedSearchCV(estimator=pipe, param_distributions=param, scoring='accuracy',
#                             n_jobs=-1, verbose=3, n_iter=4, random_state=0)
#     gs.fit(X, y)

#     # Store the best model for each classifier
#     best_algos[clf.__class__.__name__] = gs.best_estimator_

# # Select the best model (RandomForestClassifier in this case)
# be = best_algos['RandomForestClassifier']

# # Save the trained model with pickle
# with open('random_forest_model.pkl', 'wb') as f:
#     pickle.dump(be, f)

# Load the saved model
with open('random_forest_model.pkl', 'rb') as f:
    be = pickle.load(f)

# Test the model with sample data
sample_X_test = {
    'person_age': [44],
    'person_income': [80000],
    'person_home_ownership': ['MORTGAGE'],
    'person_emp_length': [14.0],
    'loan_intent': ['PARTY'],
    'loan_grade': ['A'],
    'loan_amnt': [10000],
    'loan_int_rate': [6.03],
    'cb_person_default_on_file': ['N'],
    'cb_person_cred_hist_length': [15]
}

# Convert sample data to DataFrame
sample_df = pd.DataFrame(sample_X_test)

# Make predictions using the loaded model
preds = be.predict(sample_df)
print(preds)
