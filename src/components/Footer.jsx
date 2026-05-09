import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Mercury Accounting</h4>
            <p>Providing trusted financial services since 2010.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>123 Financial Street<br />Business City, BC 12345</p>
            <p>(555) 123-4567</p>
            <p>info@mercuryaccounting.com</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Mercury Accounting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;