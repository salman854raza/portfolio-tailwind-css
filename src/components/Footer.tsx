import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <p className="footer-text">&copy; {new Date().getFullYear()} Salman Raza. All rights reserved.</p>
      <div className="footer-links">
        <a href="#hero" className="footer-link">Home</a>
        <a href="#about" className="footer-link">About</a>
        <a href="#projects" className="footer-link">Projects</a>
        <a href="#skills" className="footer-link">Skills</a>
        <a href="#contact" className="footer-link">Contact</a>
      </div>
    </div>
  );
};

export default Footer;
