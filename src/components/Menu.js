import React from 'react';
import './Menu.css'; 
import VectorLogo from '../assets/icons/logo/Vector.png';
import Vector1Logo from '../assets/icons/logo/Vector1.png';
import BrandLogo from '../assets/icons/logo/BRAND.png';

const Menu = () => {
  return (
    <div className="menu">
       <div className="menu-logo">
        <div className="logo-container">
          <img src={VectorLogo} alt="Vector Logo" />
          <img src={Vector1Logo} alt="Vector1 Logo" />
          <img src={BrandLogo} alt="BRAND Logo" />
        </div>
      </div>
      <ul className="menu-nav">
        <li>
          <button className="menu-nav-button" color="primary" size="normal" content="text only" state="normal" type="fill">
            Services
          </button>
        </li>
        <li>
          <button className="menu-nav-button" color="primary" size="normal" content="text only" state="normal" type="fill">
            Industries
          </button>
        </li>
        <li>
          <button className="menu-nav-button" color="primary" size="normal" content="text only" state="normal" type="fill">
            Cases
          </button>
        </li>
        <li>
          <button className="menu-nav-button" color="primary" size="normal" content="text only" state="normal" type="fill">
            Contact
          </button>
        </li>
      </ul>
      <button className="menu-lets-talk-button primary">Let's Talk</button>
    </div>
  );
};

export default Menu;
