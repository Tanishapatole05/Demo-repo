// DashboardPage.tsx

import React from "react";
import DashboardPanel from "./DashboardPanel";
import DashboardQuoteBox from "./DashboardQuoteBox";
import { Link } from "react-router-dom";
import "./app.css";
import "./DashboardPage.css";
import DashboardCalendar from "./DashboardCalendar";
//import RotatingQuote from "./RotatingQuote";

const DashboardPage: React.FC = () => {
  return (
    <div className="dashboard-container">
      <DashboardPanel />

      <div className="dashboard-content">
        <DashboardQuoteBox /> {/* Include the DashboardQuoteBox component */}
        {/* Add more content for the dashboard as needed */}
        {/* ... */}
        {/* Link back to the WelcomePage */}
        <DashboardCalendar />
        <Link to="/">Back to Welcome Page</Link>
      </div>
    </div>
  );
};

export default DashboardPage;
