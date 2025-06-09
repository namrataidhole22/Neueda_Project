import React, { useState } from 'react';
import axios from 'axios';

const LoanApplicationForm = () => {
    const [formData, setFormData] = useState({
        person_age: '',
        person_income: '',
        person_home_ownership: 'MORTGAGE',
        person_emp_length: '',
        loan_intent: 'MEDICAL',
        loan_grade: 'A',
        loan_amnt: '',
        loan_int_rate: '',
        cb_person_default_on_file: 'N',
        cb_person_cred_hist_length: ''
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(formData);
          const response = await axios.post('http://127.0.0.1:5000/predict', formData);
          alert(`Prediction: ${response.data.prediction}`);
        } catch (error) {
          console.error("Error during prediction:", error);
        }
      };

  return (
    <>
    {/* Header Section */}
    <header className="relative py-4 md:py-6 bg-white shadow-md">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between">
            <div className="flex-shrink-0">
              <a href="#" title="Credit Risk Analysis" className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
                <img className="w-auto h-8" src="/credit-card-svgrepo-com.svg" alt="Credit Risk Analysis Logo" />
              </a>
            </div>

            <div className="flex lg:hidden">
              <button type="button" className="text-gray-900">
                <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>

            <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-12 lg:-translate-x-1/2 lg:left-1/2">
              <a href="/" title="Home" className="text-base font-medium text-gray-900 transition-all duration-200 hover:text-opacity-50">Home</a>
              <a href="#" title="Risk Management Tools" className="text-base font-medium text-gray-900 transition-all duration-200 hover:text-opacity-50">Risk Tools</a>
              <a href="#" title="Client Support" className="text-base font-medium text-gray-900 transition-all duration-200 hover:text-opacity-50">Support</a>
            </div>

            <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
              <a href="#" title="Join the Risk Analysis Community" className="text-base font-medium text-gray-900 transition-all duration-200 hover:text-opacity-50">Join Community</a>

              <a
                href="/dashboard"
                title="Dashboard"
                className="px-5 py-2 text-base font-semibold leading-7 text-gray-900 transition-all duration-200 bg-transparent border border-gray-900 rounded-xl hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
              >
                Loan Data Dashboard
              </a>
            </div>
          </div>
        </div>
      </header>



      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-6 mt-12 border border-gray-300 rounded-lg shadow-lg bg-white">
      <h2 className="text-3xl font-semibold text-center mb-8">Loan Status Prediction</h2>
      <div className="mb-4">
        <label className="block font-semibold mb-2">Age:</label>
        <input
          type="number"
          name="person_age"
          value={formData.person_age}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block font-semibold mb-2">Income:</label>
        <input
          type="number"
          name="person_income"
          value={formData.person_income}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block font-semibold mb-2">Home Ownership:</label>
        <select
          name="person_home_ownership"
          value={formData.person_home_ownership}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Select</option>
          <option value="OWN">Own</option>
          <option value="RENT">Rent</option>
          <option value="MORTGAGE">Mortgage</option>
          <option value="OTHER">Other</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block font-semibold mb-2">Employment Length (Years):</label>
        <input
          type="number"
          name="person_emp_length"
          value={formData.person_emp_length}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block font-semibold mb-2">Loan Intent:</label>
        <select
          name="loan_intent"
          value={formData.loan_intent}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Select</option>
          <option value="MEDICAL">Medical</option>
          <option value="EDUCATION">Education</option>
          <option value="DEBTCONSOLIDATION">Debt Consolidation</option>
          <option value="HOMEIMPROVEMENT">Home Improvement</option>
          <option value="VENTURE">Venture</option>
          <option value="PERSONAL">Personal</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block font-semibold mb-2">Loan Grade:</label>
        <select
          name="loan_grade"
          value={formData.loan_grade}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Select</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
          <option value="E">E</option>
          <option value="F">F</option>
          <option value="G">G</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block font-semibold mb-2">Loan Amount:</label>
        <input
          type="number"
          name="loan_amnt"
          value={formData.loan_amnt}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block font-semibold mb-2">Loan Interest Rate:</label>
        <input
          type="number"
          name="loan_int_rate"
          value={formData.loan_int_rate}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          step="0.01"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block font-semibold mb-2">Credit History Length (Years):</label>
        <input
          type="number"
          name="cb_person_cred_hist_length"
          value={formData.cb_person_cred_hist_length}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block font-semibold mb-2">Default on File:</label>
        <div className="flex items-center space-x-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="cb_person_default_on_file"
              value="Y"
              checked={formData.cb_person_default_on_file === 'Y'}
              onChange={handleChange}
              className="mr-2"
            />
            Yes
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="cb_person_default_on_file"
              value="N"
              checked={formData.cb_person_default_on_file === 'N'}
              onChange={handleChange}
              className="mr-2"
            />
            No
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-3 mt-4 text-lg font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Submit
      </button>
    </form>
    </>
  );
};

export default LoanApplicationForm;
