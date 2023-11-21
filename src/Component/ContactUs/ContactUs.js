import React from 'react';
import './ContactUs.css';
// import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";


// import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function ContactUs() {
  return (
    <div className="contact-us-container">
      <div className="contact-form">
        <h2 className="form-title">Contact Us</h2>
        <form>
          <div className="form-group name">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-group phone">
            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" required />
          </div>

          <div className="form-group email">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>

          <button className="submit-button" type="submit">Send</button>
        </form>
      </div>

      <div className="contact-info">
        <div className="info-group phone-number">
          <div className="info-icon"><FaPhone /></div>
          <div className="info-text">
            <h4 className="info-title">Phone</h4>
            <a className="info-link" href="tel:123-456-7890">(123) 456-7890</a>
          </div>
        </div>

        <div className="info-group email-address">
          <div className="info-icon">
            <FaEnvelope />
          </div>
          <div className="info-text">
            <h4 className="info-title">Email</h4>
            <a className="info-link" href="mailto:info@example.com">info@example.com</a>
          </div>
        </div>

        <div className="info-group address-info">
          <div className="info-icon"><FaMapMarkerAlt /></div>
          <div className="info-text">
            <h4 className="info-title">Address</h4>
            <p className="info-link">123 Main St, Cityville, Country</p>
          </div>
        </div>

        <div className="social-media">
          <h4 className="social-title">Follow Us</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com" className="social-icon">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" className="social-icon">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com" className="social-icon">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/" className="social-icon" alt="LinkedIn" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;



