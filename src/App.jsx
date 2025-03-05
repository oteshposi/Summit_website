import React from "react";
import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import PoweredBy from "./components/PoweredBy";
import Countdown from "./components/Countdown";
import Expectations from "./components/Expectations";
import Footer from "./components/Footer";
import About from "./components/About";
import "./App.css";

function App() {
  return (
    <div className="app-container">  {/* Apply the class here */}
      <Navbar />
      <HeroSection />
      <PoweredBy />
      <Countdown />
      <About />
      <Expectations />
      <Footer />
    </div>
  );
}

export default App;
