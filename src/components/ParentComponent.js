import React, { useState, useEffect } from 'react';
import CaseStudies from './CaseStudies'; // Import your CaseStudies component


function ParentComponent() {
    // State to store the case studies data
    const [caseStudies, setCaseStudies] = useState([]);
    const [error, setError] = useState(null);
  
    // Effect to fetch data from the API endpoint
    useEffect(() => {
      // Fetch data from the API endpoint
      fetch('https://zm6zxgq6hyhe3smi5krzsrk2fu0iidhh.lambda-url.us-east-1.on.aws')
        .then((response) => response.json())
        .then((data) => {
          // Set the fetched data in state
          setCaseStudies(data);
        })
        .catch((error) => {
          // Handle errors, e.g., log the error or display an error message
          console.error('Error fetching data:', error);
          setError(error);
        });
    }, []); // The empty array ensures the effect runs only once when the component mounts
  
    return (
      <div>
        {/* Render CaseStudies component and pass caseStudies as a prop */}
        <CaseStudies caseStudies={caseStudies} />
  
        {/* Handle errors if needed */}
        {error && <p>Error: {error.message}</p>}
      </div>
    );
  }
  export default ParentComponent;
  