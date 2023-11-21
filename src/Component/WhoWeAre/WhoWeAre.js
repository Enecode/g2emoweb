import React from 'react';
import Image1 from '../../Component/Assets/smart-cities.jpg';
import Image2 from '../../Component/Assets/athena.jpg'; 
import './WhoWeAre.css';

const WhoWeAre = () => {
  return (
    <div className="who-we-are-container">
      {/* <h3 className="section-title">Who We Are</h3> */}
      <div className="who-we-are-section">
        <div className="who-we-are-content">
          <img className="who-we-are-image" src={Image1} alt=" 1" />
          <div className="who-we-are-description">
            <h2 className="section-title">Our Story</h2>
            <p className="who-we-are-description">
            G2EMO TECHNOLOGIES: A pioneering tech firm, simplifying lives through innovative solutions in asset management and monitoring.
            </p>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="who-we-are-section">
        <div className="who-we-are-content">
          <img className="who-we-are-image" src={Image2} alt=" 2"  />
          <div className="who-we-are-description">
            <h2 className="section-title">Our Values</h2>
            <p className="who-we-are-description">
              Our expertise empowers global industries with adaptable, secure, and top-tier tech, ensuring operational excellence and user-centric advancements. Join us in shaping tomorrow's intelligent business operations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
