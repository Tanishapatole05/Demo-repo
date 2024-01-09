// SignInSuccessPage.tsx

import React from "react";
import { Link } from "react-router-dom";
import "./app.css";
import "./SignInSuccessPage.css";

const SignInSuccessPage: React.FC = () => {
  return (
    <div className="signin-container">
      <h2>Sign In Successful</h2>
      <p>Welcome back! You are now signed in.</p>

      {/* Link to the DashboardPage */}
      <Link to="/dashboard">Go to Dashboard</Link>
    </div>
  );
};

export default SignInSuccessPage;
