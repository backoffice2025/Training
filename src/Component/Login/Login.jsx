import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaUser, FaLock } from "react-icons/fa"; // Import icons
import logo from "../logo/logo.png";
import "./Login.css";

const Login = ({ onLogin }) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    if (!id || !password) {
      toast.error("Please fill in all fields.");
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      if (id === "admin@38barracks.com" && password === "icybug") {
        onLogin(true);
        toast.success("Login successful!");
      } else {
        toast.error("Invalid credentials!");
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <img src={logo} alt="38 Barracks Logo" className="login-logo" />
          <h1 className="brand-title">
            <span className="brand-number">38</span>
            <span className="brand-name">BARRACKS</span>
          </h1>
        </div>

        <h2 className="login-title">Login</h2>
        
        <div className="input-container">
          <FaUser className="input-icon" />
          <input
            type="text"
            placeholder="Username"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="login-input"
          />
        </div>
        
        <div className="input-container">
          <FaLock className="input-icon" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
        </div>

        <button onClick={handleLogin} disabled={isLoading} className="login-button">
          {isLoading ? (
            <div className="loading-spinner">
              <div className="spinner"></div>
              Logging in...
            </div>
          ) : (
            "Login"
          )}
        </button>
      </div>
    </div>
  );
};

export default Login;