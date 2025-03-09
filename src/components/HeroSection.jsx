import React from "react";
import "./HeroSection.css"; // Import the CSS file


const HeroSection = () => {
  return (
    <section >
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="highlight">The Tech Renaissance:</span> 
          <span className="subtext">Awakening Potential, Reshaping the Future</span>
        </h1>

        <p className="hero-text">
          Join innovators, engineers, and entrepreneurs at the largest Tech Summit in Ekiti as we
          explore the future of technology, networking, and groundbreaking ideas.
        </p>
        <div className="center-container">
          <a href="https://forms.gle/y77euoi2rkKhTzTK8" 
            target="_blank" 
            rel="noopener noreferrer">
            <button className="register-btn">
              Register  
              <div className="arrow-wrapper">
                <div className="arrow"></div>
              </div>
            </button>
          </a>
        </div>



      </div>
    </section>
  );
};

export default HeroSection;


