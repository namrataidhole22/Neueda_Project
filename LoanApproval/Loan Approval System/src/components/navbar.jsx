import React from 'react';

const Navbar = () => {
    return (
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
          <a href="/interest_rates" title="Interest Rates" className="text-base font-medium text-gray-900 transition-all duration-200 hover:text-opacity-50">Interest Rates</a>
          <a href="/calc" title="Mortgage Calculator" className="text-base font-medium text-gray-900 transition-all duration-200 hover:text-opacity-50">Mortgage Calculator</a>
        </div>

        <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
          <a href="/join_community" title="Join the Risk Analysis Community" className="text-base font-medium text-gray-900 transition-all duration-200 hover:text-opacity-50">Join Community</a>

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
    );
};

export default Navbar;
