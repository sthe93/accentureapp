// Menu.js

import React from 'react';
import './Menu.css'; // Import the CSS file with styles

const Menu = () => {
  return (
    <div className="menu">
      <div className="menu-logo">Your Logo</div>
      <ul className="menu-nav">
        <button className="menu-nav-button">Services</button>
        <button className="menu-nav-button">Industries</button>
        <button className="menu-nav-button">Cases</button>
        <button className="menu-nav-button">Contact</button>
      </ul>
      <button className="menu-lets-talk-button primary">Let's Talk</button>
    </div>
  );
};

export default Menu;
