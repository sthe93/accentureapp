import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import './CaseStudySlider.css';
import { fetchCaseStudies } from '../api/api';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import WhatWeDoIcon from '../assets/icons/Rectangle1.svg';
import image1 from '../assets/images/image1.png';
import image2 from '../assets/images/image2.png';
import image3 from '../assets/images/image3.png';



function CaseStudySlider() {
  const [caseStudies, setCaseStudies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCaseStudies();
        setCaseStudies(data);
      } catch (error) {
        // Handle errors here
      }
    };

    fetchData();
  }, []);

  const sliderSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    gutter: 10,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="case-study-slider">
      <h2><img src={WhatWeDoIcon} alt="Contact Icon" className="icon" />Case Studies</h2>
      <Slider {...sliderSettings}>
        {caseStudies.map((caseStudy, index) => (
          <div key={caseStudy.id} className="case-study">
            <div className="image-container">
              <img
                src={index === 0 ? image1 : index === 1 ? image2 : image3}
                alt={caseStudy.title}
              />
              
              <div className="image-text">
                
                <div>
                <img src={WhatWeDoIcon} alt="Contact Icon" className="icon" />
                  <h3>{caseStudy.title}</h3>
                  <p>{caseStudy.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CaseStudySlider;