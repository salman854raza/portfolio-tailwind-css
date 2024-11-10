import React from 'react';
import Navbar from './Navbar';
import './hero.css';

const Hero = () => {
  return (
    <div id="hero">
      <Navbar />
      <div className="hero-container">
        <div className="hero-image-container">
          <img 
            src="/salman.jpeg" 
            alt="Salman Raza" 
            className="hero-image"
          />
        </div>
        <div className="hero-text">
          <p>I'm</p>
          <p>Salman</p>
          <p>Raza</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
