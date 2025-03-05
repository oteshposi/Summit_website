import React from "react";
import "./PoweredBy.css"; // Import styles

const PoweredBy = () => {
  return (
    <section className="powered-by">
      <h2 className="powered-text">Powered by</h2>
      <div className="euretix-logo">
      <p>Ola Otesile</p>
      </div>

      <h3 className="collaboration-text">In Collaboration With</h3>
      {/* Placeholder Logos */}
        <div className="partner-logos">
            <img className="partner-logo partner1" src="https://www.grazac.com.ng/static/media/logo-full.aba35df90e822d5a1cf1.png" alt="Partner 1" />
            <img className="partner-logo partner3" src="data:image/webp;base64,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" alt="Partner 3" />
        </div>

    </section>
  );
};

export default PoweredBy;
