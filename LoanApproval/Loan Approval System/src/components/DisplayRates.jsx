import React, { useState, useEffect } from "react";
import  Navbar  from "./navbar";

const Rates = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInterestRate = async () => {
      const apiUrl =
        "https://api.api-ninjas.com/v1/interestrate";
      const apiKey = 'hRXTzVmrfWTw4nuJhTJMPw==d18B2Vd7ZhiuLZW9';

      try {
        const response = await fetch(apiUrl, {
          headers: {
            "X-Api-Key": apiKey,
          },
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchInterestRate();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-bold text-gray-500">Loading...</p>
      </div>
    );
  if (error)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-bold text-red-500">{error}</p>
      </div>
    );

  return (
    <>
    <div>
      <Navbar />
    </div>
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-10">
      Interest Rates Around the World 🌍
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Central Bank Rates */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Central Bank Rates</h2>
          <div className="space-y-4">
            {data.central_bank_rates.map((rate, index) => (
              <div
                key={index}
                className="p-4 bg-white shadow rounded-lg border border-gray-200"
              >
                <h3 className="text-lg font-bold">{rate.central_bank}</h3>
                <p>
                  <span className="font-semibold">Country:</span> {rate.country}
                </p>
                <p>
                  <span className="font-semibold">Rate:</span> {rate.rate_pct}%
                </p>
                <p>
                  <span className="font-semibold">Last Updated:</span>{" "}
                  {rate.last_updated}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Non-Central Bank Rates */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Non-Central Bank Rates</h2>
          <div className="space-y-4">
            {data.non_central_bank_rates.map((rate, index) => (
              <div
                key={index}
                className="p-4 bg-white shadow rounded-lg border border-gray-200"
              >
                <h3 className="text-lg font-bold">{rate.name}</h3>
                <p>
                  <span className="font-semibold">Rate:</span> {rate.rate_pct}%
                </p>
                <p>
                  <span className="font-semibold">Last Updated:</span>{" "}
                  {rate.last_updated}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Prime Rates */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold">Prime Rates</h2>
        <p className="mt-2 p-4 bg-yellow-100 border border-yellow-300 rounded-lg">
          {data.prime_rates}
        </p>
      </div>
    </div>
    </>
  );
};

export default Rates;
