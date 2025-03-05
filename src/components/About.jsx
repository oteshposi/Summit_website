import React from "react";
import "./AboutSection.css"; // Import the CSS file

const About = () => {
  return (
    <section className="about-section">
      <h2 className="about-title">About </h2>
      <div className="about-content">
        <p>
          The Ikole Tech Summit is a transformative gathering of innovators, engineers, 
          and entrepreneurs dedicated to <strong>scaling up tech innovation in Nigeria</strong>. 
          Our mission is to ignite a technological renaissance by fostering collaboration, 
          sharing groundbreaking ideas, and empowering the next generation of tech leaders.
        </p>
        <p>
          Through engaging talks, hands-on workshops, and networking opportunities, we 
          are building a <strong>thriving ecosystem</strong> where knowledge meets action. 
          Whether you are a seasoned professional or an aspiring tech enthusiast, this 
          summit is your gateway to <strong>influence, impact, and drive technological progress</strong> 
          in Nigeria and beyond.
        </p>
      </div>
    </section>
  );
};

export default About;
