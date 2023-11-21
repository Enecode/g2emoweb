import React from 'react';
import NavBar from '../../Component/NavBar/NavBar.js';
import About from '../../Component/About/About.js';
import WhoWeAre from '../../Component/WhoWeAre/WhoWeAre.js';
import './home.css';
import ContactUs from '../../Component/ContactUs/ContactUs.js';
import Footer from '../../Component/Footer/Footer.js';



function Home() {
    return (
      <div className="container">
        <NavBar />
        <About />
        <WhoWeAre />
        <ContactUs />
        <Footer />
      </div>
    );
  };
  
  export default Home;
