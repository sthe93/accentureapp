import React, { useState, useEffect } from 'react';
import Menu from './components/Menu';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import CaseStudySlider from './components/CaseStudySlider'; // Import CaseStudies component
import Brands from './components/Brands';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      <Menu />
      <Hero />
      <WhatWeDo />
      <CaseStudySlider/>
      <Brands />
      <Footer />
    </div>
  );
}

export default App;
