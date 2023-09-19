import React, { useEffect, useState, useMemo } from 'react';
import Slider from 'react-slick';
import './CaseStudySlider.css';
import { fetchCaseStudies } from '../api/api';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import WhatWeDoIcon from '../assets/icons/Rectangle1.svg';

const CaseStudySlider = () => {
  const [caseStudies, setCaseStudies] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const data = await fetchCaseStudies();
      setCaseStudies(data);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const imagePaths = useMemo(() => {
    return [
      require('../assets/images/image1.png'),
      require('../assets/images/image2.png'),
      require('../assets/images/image3.png'),
    ];
  }, []);

  const handleRetry = () => {
    fetchData();
    setError(null);
  };

  // Set slidesToShow to the number of images
  const slidesToShow = imagePaths.length;

  const sliderSettings = {
    slidesToShow, // Set slidesToShow to the number of images
    slidesToScroll: 1,
    arrows: true,
    gutter: 10,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // For screens smaller than 768px, show only 1 slide
        },
      },
    ],
  };

  return (
    <div className="case-study-slider">
      <h2>
        <img src={WhatWeDoIcon} alt="Contact Icon" className="icon" /> Case Studies
      </h2>
      {error ? (
        <div>
          <p>Error: {error.message}</p>
          <button onClick={handleRetry}>Retry</button>
        </div>
      ) : (
        <Slider {...sliderSettings}>
          {caseStudies.map((caseStudy, index) => (
            <div key={caseStudy.id} className="case-study">
              <div className="image-container">
                <img
                  src={imagePaths[index % imagePaths.length]}
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
      )}
    </div>
  );
};

export default CaseStudySlider;
