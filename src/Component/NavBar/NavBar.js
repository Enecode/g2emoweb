
import React, { useState } from 'react';
import './NavBar.css';
// import { Link } from 'react-router-dom';
import Logo from '../../Component/Assets/G2EMO_LOGO_White.png';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="navbar-content">
          <div className="navbar-logo">
            <img className="navbar-logo-image" src={Logo} alt="Logo" />
          </div>

          <div className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
            <ul className="navbar-menu-items">
              <li className="navbar-menu-item">About</li>
              <li className="navbar-menu-item">Technology</li>
              <li className="navbar-menu-item">Contact</li>
              <li className="navbar-menu-item">Demo</li>
              <li className="navbar-menu-item">Tech News</li>
            </ul>
          </div>

          <div className="navbar-hamburger" onClick={toggleMenu}>
            <div className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></div>
            <div className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></div>
            <div className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></div>
          </div>
        </div>

        <div className="content">
          <div className="title">
            <h1 className="title-text">CREATING A CONNECTED FUTURE THROUGH TECH</h1>
          </div>
          <div className="subtitle">
            <h2 className="subtitle-text">Empowering Tomorrow, Today: Building a Tech-Driven Connected Future</h2>
          </div>

          <button className="get-started-button">
            Request Demo
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
