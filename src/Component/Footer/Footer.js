import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css';
import Logo from '../../Component/Assets/G2EMO_LOGO_White.png';




const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-section">
        <div className="footer-logo">
          <img src={Logo} alt="Logo" />
        </div>
        <p className="footer-description">
            G2EMO Technologies was founded by a group of like-minded and experienced experts in the technology space who wanted to develop solutions that help make life easier. As we grew, we recruited some of the brightest minds to help create the well-oiled engine we have today.
        </p>
      </div>

      <div className="footer-section">
        <div className="social-icons-container">
          <a href="https://www.facebook.com" className="social-icons">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" className="social-icons">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com" className="social-icons">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/" className="social-icons" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>

      <div className="footer-section">
        <div className="footer-links">
          <a href="/terms">Terms of Service</a>
          <a href="/privacy">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
