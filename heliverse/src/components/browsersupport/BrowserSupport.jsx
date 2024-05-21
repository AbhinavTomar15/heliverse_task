import React from 'react';
import browsersImage from '../../assets/browsersImage.png';
import './BrowserSupport.css';

const BrowserSupport = () => {
  return (
    <div className="container">
      <h2>Supported by All Popular Browsers</h2>
      <p>Rest assured, Motion Art is designed to be compatible <br/>with all major web browsers.</p>
      <div className="browser-logos">
        <img src={browsersImage} alt="Chrome, Firefox, Edge" />
      </div>
    </div>
  );
};

export default BrowserSupport;