import React from 'react';
import MissionImage from '../../Component/Assets/mission.png';
import VisionImage from '../../Component/Assets/vision.png';
import ValuesImage from '../../Component/Assets/VALUES.png'; 
import './About.css';


function About(){
  return (
    <div className="about-container">
      {/* Mission Section */}
      <div className="about-section">
        <img className="about-image" src={MissionImage} alt="Mission" />
        <h2 className="about-title">Mission</h2>
        <p className="about-description">
        Creating advanced tech for user comfort, effectiveness, and efficiency, fulfilling our vision through innovation solutions.
        </p>
      </div>

      {/* Vision Section */}
      <div className="about-section">
        <img className="about-image" src={VisionImage} alt="Vision" />
        <h2 className="about-title">Vision</h2>
        <p className="about-description">
        To create a connected future by providing innovative solutions through technology.
        </p>
      </div>

      {/* Values Section */}
      <div className="about-section">
        <img className="about-image" src={ValuesImage} alt="Values" />
        <h2 className="about-title">Values</h2>
        <p className="about-description">
        Teamwork, Innovation, Ease of Use, and Integrity (T.I.E).
        </p>
      </div>
    </div>
  );
};

export default About;
