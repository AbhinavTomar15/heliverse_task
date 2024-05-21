import React from 'react';
import './ApplyCard.css';
import sectionImage from '../../assets/section-image.png';
import pageImage from '../../assets/page-image.png';

const ApplyCard = () => {
  return (
    <div className="feature-images">
      <h1 className="feature-heading">Apply On Any Section Or Enable 
      <br/>For Whole Page</h1>
      <div className="image-container">
        <div className="image-wrapper">
          <img src={sectionImage} alt="Apply On Section" />
        </div>
        <div className="image-wrapper">
          <img src={pageImage} alt="Apply On Page" />
        </div>
      </div>
    </div>
  );
};

export default ApplyCard;