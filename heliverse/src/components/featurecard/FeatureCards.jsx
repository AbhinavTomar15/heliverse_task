import React from 'react';
import lightweightIcon from '../../assets/lightweight.png';
import responsiveIcon from '../../assets/responsive.png';
import userFriendlyIcon from '../../assets/user-friendly.png';
import './FeatureCards.css';


const FeatureCards = () => {
  return (
    <div className="feature-cards">
      <h2>An All-Round Plugin With Powerful Features</h2>
      <p>
        Whether you're a seasoned web designer or just starting out, Motion Art for <br/>Elementor seamlessly integrates with the Elementor platform, providing you <br/>with a seamless and intuitive experience.
      </p>
      <div className="card-container">
        <div className="card">
          <img src={lightweightIcon} alt="Lightweight" />
          <h3>Light Weight</h3>
          <p>Motion Art for Elementor is designed to be lightweight.</p>
        </div>
        <div className="card">
          <img src={responsiveIcon} alt="Responsive" />
          <h3>100% Responsive</h3>
          <p>Create a consistent visual experience across all devices.</p>
        </div>
        <div className="card">
          <img src={userFriendlyIcon} alt="User Friendly" />
          <h3>User Friendly Interface</h3>
          <p>Ensure a smooth experience for both applicants and administrators.</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCards;