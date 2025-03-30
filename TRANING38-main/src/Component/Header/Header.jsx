import React from "react";
import "./Header.css";
import logo from "../logo/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <img src={logo} alt="38 Barracks Logo" className="logo" />
          <h1 className="header-title">
            <span className="header-number">38</span> Barracks
          </h1>
        </div>
        
        <nav className="nav-menu">
          <ul className="nav-list">
            <li className="nav-item">About Us</li>
            <li className="nav-item">Products</li>
            <li className="nav-item">
              <a 
                href="https://38barracks.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="nav-link"
              >
                Our Page
              </a>
            </li>
            <li className="nav-item contact-btn">Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;