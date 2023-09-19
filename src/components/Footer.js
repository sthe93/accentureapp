import React from 'react';
import './Footer.css';
import WhatWeDoIcon from '../assets/icons/Rectangle1.svg';

const Footer = () => {
  return (
    <div className="footer">
      <div className="contact-info">
        <div className="contact-heading">
          <h2><img src={WhatWeDoIcon} alt="Contact Icon" className="icon" />Contact Us</h2>
          <div className="project-info">
            <p>
          <span>Have a project in mind?</span><br />
          Let's make it happen
        </p>
          </div>
        </div>
       
        <div className="contact-details">
          <div className="address-row">
            <a>22 Street Name, Suburb, 8000</a>
            <a>Cape Town, South Africa</a>
            <a>+27 21 431 0001</a>
            <a className="email-link">enquirie@website.co.za</a>
          </div>
          
        </div>
      </div>
      <div className="footer-links">
        <div className="social-links-row">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Impressum</a>
        </div>
        <div className="social-links-row">
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
        </div>
        <div className="social-links-row">
          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
          <a href="#">Teams</a>
        </div>
        <div className="social-links-row">
          <a href="#">YouTube</a>
          <a href="#">Behance</a>
          <a href="#">Dribbble</a>
        </div>
        <div className="social-links-row">
          <a href="#">Explore open jobs</a>
          <a href="#">2000-2003 company name</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
