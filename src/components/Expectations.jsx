import React from "react";
import "./Expectations.css";

const expectations = [
  {
    text: "Networking with Tech Experts",
    description: "Engage with top professionals in the tech industry to expand your network and learn from their experience.",
    image: "https://i.pinimg.com/236x/19/3a/15/193a15f41d1cacf83d4eac420b036a37.jpg"
  },
  {
    text: "Inspiring Keynotes",
    description: "Listen to thought-provoking keynotes from industry leaders who will share insights on the future of tech and innovation.",
    image: "https://i.pinimg.com/236x/83/df/1d/83df1d516c0fba80261c19350c2e5a5a.jpg"
  },
  {
    text: "Career Growth Opportunities",
    description: "Discover new career paths, internship programs, and opportunities to boost your professional journey in tech.",
    image: "https://i.pinimg.com/236x/b0/3f/81/b03f815fb319ce720eea730cf59ff111.jpg"
  },
  {
    text: "Startup Pitches & Competitions",
    description: "Witness innovative startup pitches and participate in exciting competitions to showcase your skills and win prizes.",
    image: "https://i.pinimg.com/736x/79/e7/f1/79e7f15ae6f4c831e26e7f30511a1f96.jpg"
  },
];

const Expectations = () => {
  return (
    <section className="expectations">
      <h2>What to Expect</h2>
      <div className="expectation-container">
        {expectations.map((item, index) => (
          <div 
            key={index} 
            className="expectation-box"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="expectation-overlay">
              <div className="expectation-text">
                <h3>{item.text}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Expectations;
