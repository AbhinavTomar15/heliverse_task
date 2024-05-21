import React from 'react';
import './TrustedBy.css';
import logo from '../../assets/logo.png';
import g2Logo from '../../assets/g2.png';
import wordpressLogo from '../../assets/wordpress.png';

const TrustedBy = () => {
  const reviews = [
    {
      logo: logo,
      alt: 'Envato',
      score: '4.5',
      reviews: 'Score, 9 Reviews',
    },
    {
      logo: g2Logo,
      alt: 'G2',
      score: '4.5',
      reviews: 'Score, 9 Reviews',
    },
    {
      logo: wordpressLogo,
      alt: 'WordPress',
      score: '4.5',
      reviews: 'Score, 9 Reviews',
    },
  ];

  return (
    <div className="trusted-by">
      <h2>Trusted by thousands of users around the world</h2>
      <div className="reviews">
        {reviews.map((review, index) => {
          const alignmentClass = index === 0 ? 'left' : index === 1 ? 'center' : 'right';
          return (
            <div key={index} className={`review ${alignmentClass}`}>
              <div className="logo-container">
                <img src={review.logo} alt={review.alt} className="logo" />
              </div>
              <div className="review-details">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>&#9733;</span>
                  ))}
                </div>
                <div className="score">
                  <strong>{review.score}</strong> {review.reviews}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrustedBy;