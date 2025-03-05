import React from "react";
import "./Navbar.css"; // Import CSS for styling
import logo from "../assets/Artboard 1(White).png"; 

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div>
        <img src={logo} className="logo-img" alt="Ikole Tech Summit Logo" />
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li>
          <a href="https://docs.google.com/forms/u/0/d/e/1FAIpQLScDXBtuaWm9gncyufVSaBdGFTvU46RYi6B6DyXfWN5oTALApg/formResponse" className="btn register-btn">
            Register
          </a>
        </li>
        <li>
          <a href="#" className="btn contact-btn">Contact →</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
