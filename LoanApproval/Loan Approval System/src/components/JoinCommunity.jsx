import React from "react";
import Navbar from "./navbar";

const JoinCommunity = () => {
  return (
    <>
    <div>
        <Navbar />
      </div>
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-6">
          Join Our Community
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Be a part of a thriving community of financial analysts, credit risk
          professionals, and enthusiasts. Connect, share knowledge, and grow
          together!
        </p>

        <form className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your full name"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500"
              required
            />
          </div>

          {/* Interest */}
          <div>
            <label htmlFor="interest" className="block text-sm font-medium text-gray-700">
              What are you interested in?
            </label>
            <select
              name="interest"
              id="interest"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500"
              required
            >
              <option value="">Select an option</option>
              <option value="credit-risk">Credit Risk Analysis</option>
              <option value="financial-modeling">Financial Modeling</option>
              <option value="data-analytics">Data Analytics</option>
              <option value="networking">Networking Opportunities</option>
            </select>
          </div>

          {/* Join Button */}
          <button
            type="submit"
            className="w-full py-3 px-4 bg-gray-900 text-white font-semibold rounded-md shadow-sm hover:bg-gray-700 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Join the Community
          </button>
        </form>

        {/* Additional Info */}
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Already a member?{" "}
            <a
              href="/login"
              className="text-gray-900 font-medium hover:underline"
            >
              Log in here
            </a>
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default JoinCommunity;
