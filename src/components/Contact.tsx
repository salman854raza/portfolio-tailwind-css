import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <h2 className="contact-title">Contact Me</h2>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" className="contact-input" />
        <input type="email" placeholder="Your Email" className="contact-input" />
        <textarea placeholder="Your Message" className="contact-textarea"></textarea>
        <button type="submit" className="contact-button">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
