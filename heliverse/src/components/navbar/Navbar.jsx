import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
      <img src={logo} alt="logo" className="logo" />
        <span className="site-name">
          <span className="envato">envato</span>
          <span className="market">market</span>
        </span>
      </div>
      <div className="navbar-right">
        <button className="buy-now">Buy now</button>
      </div>
    </nav>
  );
}

export default Navbar;

