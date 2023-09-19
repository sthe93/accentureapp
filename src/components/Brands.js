import React from 'react';
import './Brands.css';
import BrandIcon from '../assets/icons/Brand.svg';
import Brand1Icon from '../assets/icons/Brand-1.svg';
import Brand2Icon from '../assets/icons/Brand-2.svg';
import Brand3Icon from '../assets/icons/Brand-3.svg';
import Brand4Icon from '../assets/icons/Brand-4.svg';
import Brand5Icon from '../assets/icons/Brand-5.svg';
import Brand6Icon from '../assets/icons/Brand-6.svg';
import Brand7Icon from '../assets/icons/Brand-7.svg';
import Brand8Icon from '../assets/icons/Brand-8.svg';
import Brand9Icon from '../assets/icons/Brand-9.svg';
import Brand10Icon from '../assets/icons/liquid.svg';
import Brand11Icon from '../assets/icons/engen-black 1.svg';
import BBCIcon from '../assets/icons/bbc-black 1.svg';
import DistellIcon from '../assets/icons/distell-black 1.svg';
import MicrosoftIcon from '../assets/icons/microsoft-black 1.svg';
import PNPIcon from '../assets/icons/pnp-black 1.svg';
import MultichoiceIcon from '../assets/icons/multichoice-black 1.svg';
import SanlamIcon from '../assets/icons/sanlam-black 1.svg';
import SantamIcon from '../assets/icons/santam-black 1.svg';
import SpotifyIcon from '../assets/icons/spotify-black 1.svg';
import LiquidIcon from '../assets/icons/liquid.svg';
import TFGIcon from '../assets/icons/tfg-black 1.svg';
import TymeBankIcon from '../assets/icons/tyme-bank-black.svg';
import VisaIcon from '../assets/icons/visa-black.svg';
import WesgrowIcon from '../assets/icons/wesgrow-black 1.svg';

import WhatWeDoIcon from '../assets/icons/Rectangle1.svg'

const Brands = () => {
  return (
    <section className="brands">
      <div className="brand-heading">
        <h2><img src={WhatWeDoIcon} alt="What We Do Icon" className="icon" />You’ll be in good company</h2>
        <h2>Trusted by leading brands</h2>
      </div>
      <div className="brand-logos">
      <img src={Brand5Icon} alt="Brand 1" className="transparent-background"/> 
      <img src={Brand6Icon} alt="Brand 1" className="transparent-background"/> 
        <img src={Brand7Icon} alt="Brand 1" className="transparent-background"/> 
        <img src={Brand8Icon} alt="Brand 1" className="transparent-background"/> 
        <img src={Brand9Icon} alt="Brand 1" className="transparent-background"/> 
        <img src={Brand10Icon} alt="Brand 1" className="transparent-background"/> 
        <img src={Brand11Icon} alt="Brand 1" className="transparent-background"/>
        <img src={WesgrowIcon} alt="Brand 1" className="transparent-background"/>  
        
        <img src={BrandIcon} alt="Brand 1" className="transparent-background" /> 
        <img src={Brand1Icon} alt="Brand 1" className="transparent-background"/> 
        <img src={Brand2Icon} alt="Brand 1" className="transparent-background" />   
        <img src={Brand3Icon} alt="Brand 1" className="transparent-background" /> 
        <img src={Brand4Icon} alt="Brand 1" className="transparent-background" /> 
        
       
        <img src={BBCIcon} alt="Brand 1" className="transparent-background"/> 
        <img src={DistellIcon} alt="Brand 1" className="transparent-background"/> 
        <img src={MicrosoftIcon} alt="Brand 1" className="transparent-background"/> 
        <img src={PNPIcon} alt="Brand 1" className="transparent-background"/> 
        <img src={MultichoiceIcon} alt="Brand 1" className="transparent-background"/> 
        <img src={SanlamIcon} alt="Brand 1" className="transparent-background"/> 
        <img src={SantamIcon} alt="Brand 1" className="transparent-background"/> 
        <img src={SpotifyIcon} alt="Brand 1" className="transparent-background"/> 
        

      </div>
    </section>
  );
};

export default Brands;
