// WelcomePage.tsx

import React from "react";
import { Link } from "react-router-dom";
import "./app.css";

const WelcomePage: React.FC = () => {
  const backgroundStyle: React.CSSProperties = {
    backgroundImage: `url('pin7.jpg')`, // Replace 'background.jpg' with your actual image file
    backgroundSize: "contain",
    backgroundPosition: "center",
    height: "90vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between", // Adjust spacing between content and buttons
    color: "#ffffff",
    padding: "20px", // Add padding for better visibility
  };

  return (
    <div style={backgroundStyle}>
      <div>
        {/* Your background image and styling go here */}
        <h1>Welcome to Datagami Technologies</h1>
      </div>

      {/* Sign In and Sign Up buttons */}
      <div className="welcome-buttons">
        <Link to="/signin">
          <button>Sign In</button>
        </Link>
        <Link to="/signup">
          <button>Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default WelcomePage;
