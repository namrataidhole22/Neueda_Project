import React, { useState } from "react";
import Navbar from "./navbar";

const MortgageCalculator = () => {
  const [formData, setFormData] = useState({
    loanAmount: "",
    interestRate: "",
    durationYears: "",
  });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { loanAmount, interestRate, durationYears } = formData;

    if (!loanAmount || !interestRate || !durationYears) {
      setError("All fields are required!");
      return;
    }

    setError("");
    setLoading(true);

    const apiUrl = `https://api.api-ninjas.com/v1/mortgagecalculator?loan_amount=${loanAmount}&interest_rate=${interestRate}&duration_years=${durationYears}`;
    const apiKey =  'hRXTzVmrfWTw4nuJhTJMPw==d18B2Vd7ZhiuLZW9'; // Replace with your actual API key

    try {
      const response = await fetch(apiUrl, {
        headers: { "X-Api-Key": apiKey },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <div>
        <Navbar />
    </div>
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
        <h1 className="text-2xl font-bold text-center mb-6">
          Mortgage Calculator
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="loanAmount" className="block font-medium text-gray-700">
              Loan Amount
            </label>
            <input
              type="number"
              name="loanAmount"
              id="loanAmount"
              value={formData.loanAmount}
              onChange={handleInputChange}
              placeholder="Enter loan amount"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500"
            />
          </div>

          <div>
            <label htmlFor="interestRate" className="block font-medium text-gray-700">
              Interest Rate (%)
            </label>
            <input
              type="number"
              step="0.01"
              name="interestRate"
              id="interestRate"
              value={formData.interestRate}
              onChange={handleInputChange}
              placeholder="Enter interest rate"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500"
            />
          </div>

          <div>
            <label htmlFor="durationYears" className="block font-medium text-gray-700">
              Duration (Years)
            </label>
            <input
              type="number"
              name="durationYears"
              id="durationYears"
              value={formData.durationYears}
              onChange={handleInputChange}
              placeholder="Enter loan duration in years"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500"
            />
          </div>

          {error && <p className="text-red-500">{error}</p>}

          <button
            type="submit"
            className="w-full py-2 bg-gray-900 text-white rounded-md font-semibold hover:bg-gray-700 transition"
          >
            {loading ? "Calculating..." : "Calculate"}
          </button>
        </form>

        {result && (
          <div className="mt-6 p-4 bg-gray-50 rounded-md border border-gray-200">
            <h2 className="text-xl font-bold mb-4">Calculation Results</h2>
            <p>
              <span className="font-semibold">Monthly Payment:</span> $
              {result.monthly_payment.total}
            </p>
            <p>
              <span className="font-semibold">Annual Payment:</span> $
              {result.annual_payment.total}
            </p>
            <p>
              <span className="font-semibold">Total Interest Paid:</span> $
              {result.total_interest_paid}
            </p>
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default MortgageCalculator;
