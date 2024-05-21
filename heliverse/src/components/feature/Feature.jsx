import React from 'react';
import './Feature.css';
import motionArtEffectLogo from '../../assets/motionArtEffectLogo.png';

const Feature = () => {
  return (
    <div className="motion-art-effect">
      <div className="header">
        <img src={motionArtEffectLogo} alt="Motion Art Effect" className="logo" />
        <button className="purchase-button">Purchase Now</button>
      </div>
      <div className="content">
        <h1>Attract Your Visitors</h1>
        <h1>Attention With</h1>
        <h1>Colorful</h1>
        <h1 className='motion'>Motion Art Effect</h1>
        <p>Unleash the power of creativity with Motion Art for Elementor - your ultimate <br/> 
        solution for seamlessly integrating captivating animations into your website
        </p>
      </div>
    </div>
  );
};

export default Feature;