import React from "react";
import "./Footer.css";
import { FaDiscord, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="venue">
        <strong>Venue:</strong> Federal University Oye Ekiti, Ikole Campus, Ekiti State, Nigeria
      </p>
      <p className="contact">
        <strong>Phone:</strong> +234 913 713 4948 
      </p>

      <div className="social-icons">
        <a href="https://discord.com" target="_blank" rel="noopener noreferrer"><FaDiscord /></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="mailto:info@ikoletechsummit.com"><FaEnvelope /></a>
      </div>

      <p className="copyright">© {new Date().getFullYear()} Axrev Tech Summit. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
