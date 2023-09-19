import axios from 'axios';

const API_URL = 'https://accentureapi-121638ce68c7.herokuapp.com/api/caseStudies'; // Use your proxy server URL

// Function to fetch data from the API
export const fetchCaseStudies = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching data from the API:', error);
    throw error;
  }
};
