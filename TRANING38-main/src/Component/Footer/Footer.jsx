import React from "react";
import "./Footer.css"; // We'll create this CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-heading">38 Barracks</h3>
          <p className="footer-text">
          A UNIT OF LIDO DINERS
          GST - 07AADFL0250G2ZR
          </p>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/about">About Us</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="https://38barracks.com/">Our Page</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-heading">Contact Us</h3>
          <p className="footer-text">
            Email: info@38barracks.com<br/>
            Phone: +91 88006 61263
          </p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} 38 Barracks. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;