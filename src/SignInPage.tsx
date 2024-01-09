// SignInPage.tsx

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./app.css";
import "./SignInPage.css";

const SignInPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = () => {
    console.log("Signing in...");
    console.log("Username:", username);
    console.log("Password:", password);

    // For successful sign-in
    const isAuthenticated = true;

    if (isAuthenticated) {
      // Navigate to the DashboardPage
      navigate("/dashboard");
    } else {
      // Handle authentication failure
      console.log("Authentication failed");
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-box">
        <h2>Sign In</h2>
        <form>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button type="button" onClick={handleSignIn}>
            Sign In
          </button>
        </form>

        {/* Link back to the WelcomePage */}
        <Link to="/">Back to Welcome Page</Link>
      </div>
    </div>
  );
};

export default SignInPage;
