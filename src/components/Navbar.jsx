import React from 'react';
import "./Navbar.css";

const Navbar = ({ scrollToSection }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <h2>Mercury Accounting</h2>
        </div>
        <ul className="navbar-menu">
          <li><button onClick={() => scrollToSection('home')}>Home</button></li>
          <li><button onClick={() => scrollToSection('about')}>About</button></li>
          <li><button onClick={() => scrollToSection('services')}>Services</button></li>
          <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
