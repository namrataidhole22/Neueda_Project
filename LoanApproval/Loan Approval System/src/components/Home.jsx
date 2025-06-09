import React from 'react';
import Navbar from './navbar';

const Home = () => {
  return (
    <div className="overflow-x-hidden bg-gray-50">
      {/* Header Section */}
      <div>
        <Navbar />
      </div>

      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:pt-20 xl:pb-0">
        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mt-5 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">Advanced Credit Risk Analysis Solutions</h1>
            <p className="max-w-md mx-auto mt-6 text-base leading-7 text-gray-600">Utilizing state-of-the-art tools and analytics to assess and mitigate credit risk. Make informed financial decisions with confidence.</p>

            <div className="relative inline-flex mt-10 group">
              <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>

              <a href="/credit_analysis" title="Get Access to Risk Data" className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gray-900 rounded-xl hover:bg-gray-900 focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                Loan Status Prediction Model
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-20">
          <img className="object-cover object-top w-full h-auto mx-auto max-h-96 xl:max-h-100 scale-100 xl:scale-100" src="/image1.jpeg" alt="Credit Risk Analysis Illustration" />
        </div>
      </section>

      {/* Card Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900">Our Core Credit Risk Factors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
              <h3 className="text-xl font-semibold text-gray-900">Character</h3>
              <p className="mt-2 text-gray-600">Character is a key indicator of future creditworthiness, often based on past borrowing and repayment behaviors.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
              <h3 className="text-xl font-semibold text-gray-900">Collateral</h3>
              <p className="mt-2 text-gray-600">Collateral serves as security against credit exposure, providing lenders assurance in case of default.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
              <h3 className="text-xl font-semibold text-gray-900">Capacity</h3>
              <p className="mt-2 text-gray-600">Capacity measures an individual's ability to service debt obligations, often assessed through financial ratios.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
              <h3 className="text-xl font-semibold text-gray-900">Capital</h3>
              <p className="mt-2 text-gray-600">Capital refers to the financial resources invested in an individual or business, offering stability during difficult times.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
              <h3 className="text-xl font-semibold text-gray-900">Conditions</h3>
              <p className="mt-2 text-gray-600">Conditions involve external factors such as economic climate or regulatory changes that affect a borrower's ability to repay.</p>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">About Us</h3>
            <p className="text-sm text-gray-400">
              We specialize in providing insights and tools for credit risk
              analysis, empowering individuals and businesses to make informed
              financial decisions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="hover:text-gray-100 transition duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/join-community"
                  className="hover:text-gray-100 transition duration-200"
                >
                  Join Community
                </a>
              </li>
              <li>
                <a
                  href="/dashboard"
                  className="hover:text-gray-100 transition duration-200"
                >
                  Loan Data Dashboard
                </a>
              </li>
              <li>
                <a
                  href="/support"
                  className="hover:text-gray-100 transition duration-200"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Email: Analysis@creditrisk.com</li>
              <li>Phone: +91 9869848229</li>
              <li>Address: Narmada Enclave, Borivali West, Mumbai-400092</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Credit Risk Analysis. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Home;

