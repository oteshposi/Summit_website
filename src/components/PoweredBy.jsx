import React from "react";
import "./PoweredBy.css"; // Import the CSS file
import techSummitLogo from "../assets/download-removebg-preview.png"; // Import the image


const PoweredBy = () => {
  return (
    <div className="powered-by-container">
      <p className="powered-by-text">Powered By</p>
      <p className="powered-by-name">Ola Otesile</p>
      <p className="collaboration-text">In collaboration with</p>
      <div className="logos-container">
        <img src={techSummitLogo} alt="Logo 1" className="logo" />
        <img src="/logo2.png" alt="Logo 2" className="logo" />
      </div>
    </div>
  );
};

export default PoweredBy;
