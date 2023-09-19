// WhatWeDo.js

import React from 'react';
import WebDevIcon from '../assets/icons/webdevicon.svg'; // Replace with the actual icon filename
import UxIcon from '../assets/icons/uxicon.svg';
import AppDevIcon from '../assets/icons/appdevicon.svg';
import BlockChainIcon from '../assets/icons/blockchainicon.svg';
import WhatWeDoIcon from '../assets/icons/Rectangle1.svg'

import './WhatWeDo.css';

const WhatWeDo = () => {
  return (
    <section className="what-we-do">
      <div className="heading-container">
        <div className="what-we-do-heading">
          <h2><img src={WhatWeDoIcon} alt="What We Do Icon" className="icon" />What we do</h2>
        </div>
      </div>
      <div className="what-we-do-text">
        <p>We offer a complete range of bespoke design and development services to help you turn your ideas into digital masterpieces</p>
      </div>
      <div className="service-container">
      <div className="service">
          <img src={WebDevIcon} alt="Web Development Icon" className="service-icon" />
          <h3>Web development</h3>
          <p>We use cutting-edge web development technologies to help our clients fulfill their business goals through functional, reliable solutions.</p>
        </div>
        <div className="service">
          <img src={UxIcon} alt="Web Development Icon" className="service-icon" />
          <h3>User experience & design</h3>
          <p>Our complete web design services will bring your ideas to life and provide you with a sleek, high-performing product that elevates your business.</p>
        </div>
        <div className="service">
          <img src={AppDevIcon} alt="Web Development Icon" className="service-icon" />
          <h3>Mobile app development</h3>
          <p>Our extensive mobile development experience allows us to create custom native and cross-platform iOS and Android mobile solutions for our clients.</p>
        </div>
        <div className="service">
          <img src={BlockChainIcon} alt="Web Development Icon" className="service-icon" />
          <h3>Blockchain solutions</h3>
          <p>We conduct market research to determine the optimal blockchain-based solutions to help you grow your company and achieve your business goals.</p>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
