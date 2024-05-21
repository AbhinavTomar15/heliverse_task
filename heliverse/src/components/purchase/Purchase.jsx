import React from 'react';
import './Purchase.css';
import illustrationIcon from '../../assets/illustration-icon.png';

const Purchase = () => {
  return (
    <div className="motion-art-container">
      <div className="content">
        <h1>Turn Your Cursor Into A Colorful Magic Wand &amp; Charm Your Visitors</h1>
        <p>
          Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements.
        </p>
        <button className="purchased-button">Purchase From Envato   
        <span className="arrow-icon">&#8594;</span>
        </button>
      </div>
      <div className="illustration">
        <img src={illustrationIcon} alt="Illustration Icon" />
      </div>
    </div>
  );
};

export default Purchase;