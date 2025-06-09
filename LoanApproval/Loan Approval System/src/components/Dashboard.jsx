import React, { useEffect, useState } from 'react';
import { Doughnut, Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, ArcElement, BarElement, Tooltip, Legend } from 'chart.js';
import './Dashboard.css';
import Navbar from './navbar';

// Register the necessary Chart.js components
ChartJS.register(
  CategoryScale,       // Required for bar charts to handle x-axis scale
  LinearScale,         // Required for bar and line charts for y-axis scale
  PointElement,        // For line charts
  LineElement,         // For line charts
  ArcElement,          // For doughnut charts
  BarElement,          // For bar charts
  Tooltip,             // For tooltips
  Legend               // For the chart legend
);

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    // Fetch dashboard data from the backend API
    fetch('http://localhost:5000/get_dashboard_data')
      .then(response => response.json())
      .then(data => {
        setDashboardData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  if (!dashboardData) {
    return <div className="loading">Loading...</div>;
  }

  // Extract the required data from the API response
  const defaultRate = dashboardData.default_rate;
  const ageDistribution = dashboardData.age_distribution;
  const incomeLoanStats = dashboardData.income_loan_stats;
  const homeownershipDefaultRate = dashboardData.homeownership_default_rate;
  const employmentDefaultRate = dashboardData.employment_default_rate;

  // Data for Donut Chart: Overall Default Rate
  const donutData = {
    labels: ['Defaulted', 'Non-defaulted'],
    datasets: [
      {
        data: [defaultRate, 1 - defaultRate],
        backgroundColor: ['#93c8dc', '#73acfd'],
        hoverOffset: 4,
      },
    ],
  };

  // Data for Bar Chart: Homeownership vs Default Rate
  const homeownershipLabels = homeownershipDefaultRate.map(item => item.person_home_ownership);
  const homeownershipValues = homeownershipDefaultRate.map(item => item.loan_status);

  const barData = {
    labels: homeownershipLabels,
    datasets: [
      {
        label: 'Default Rate',
        data: homeownershipValues,
        backgroundColor: '#d8f0df',
        borderColor: '#0a9a9b',
        borderWidth: 1,
      },
    ],
  };

  // Data for Line Chart: Employment Length vs Default Rate
  const employmentLabels = employmentDefaultRate.map(item => item.cb_person_cred_hist_length);
  const employmentValues = employmentDefaultRate.map(item => item.loan_status);

  const lineData = {
    labels: employmentLabels,
    datasets: [
      {
        label: 'Default Rate',
        data: employmentValues,
        fill: false,
        borderColor: '#dbc3e4',
        tension: 0.1,
        borderWidth: 2,
      },
    ],
  };

  return (
    <>
    <div>
      <Navbar />
    </div>
  
    <div className="dashboard-container">
      
      <h1 className="dashboard-title">Loan Data Dashboard</h1>
      <div className="chart-container">
        {/* Donut Chart for Overall Default Rate */}
        <div className="chart-card">
          <h3 className="chart-title">Overall Default Rate</h3>
          <Doughnut data={donutData} />
        </div>

        {/* Bar Chart for Homeownership vs Default Rate */}
        <div className="chart-card">
          <h3 className="chart-title">Homeownership vs Default Rate</h3>
          <Bar
            data={barData}
            options={{
              responsive: true,
              plugins: {
                title: {
                  display: true,
                  text: 'Homeownership vs Default Rate',
                },
              },
            }}
          />
        </div>

        {/* Line Chart for Employment Length vs Default Rate */}
        <div className="chart-card">
          <h3 className="chart-title">Employment Length vs Default Rate</h3>
          <Line
            data={lineData}
            options={{
              responsive: true,
              plugins: {
                title: {
                  display: true,
                  text: 'Employment Length vs Default Rate',
                },
              },
            }}
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default Dashboard;
