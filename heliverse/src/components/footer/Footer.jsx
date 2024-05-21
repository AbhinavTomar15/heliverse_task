import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <div className="footer-spacer"></div>
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2023 Copywrite. All rights reserved by QodeMatrix</p>
          <div className="footer-links">
            <a href="#">Documentation</a>
            <a href="#">Support</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
