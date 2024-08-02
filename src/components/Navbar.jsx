import React from 'react';
import "./Navbar.css";

const Navbar = ({ scrollToSection }) => {
  return (
    <nav className="navbar">
      <ul>
        <li><button onClick={() => scrollToSection('home')}>Home</button></li>
        <li><button onClick={() => scrollToSection('about')}>About</button></li>
        <li><button onClick={() => scrollToSection('qualifications')}>Qualifications</button></li>
        <li><button onClick={() => scrollToSection('services')}>Services</button></li>
        <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
