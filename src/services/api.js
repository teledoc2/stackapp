import { Alert } from 'react-native';

// Base URL for API calls
const BASE_URL = 'https://api.example.com';

// Helper function for handling errors
const handleErrors = (error) => {
  console.error('API Error:', error);
  Alert.alert(
    'Error',
    'Something went wrong. Please try again later.',
    [{ text: 'OK' }]
  );
  return null;
};

// Generic GET request
export const fetchData = async (endpoint, params = {}) => {
  try {
    const queryString = Object.keys(params).length 
      ? '?' + new URLSearchParams(params).toString() 
      : '';
    
    const response = await fetch(`${BASE_URL}/${endpoint}${queryString}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    return handleErrors(error);
  }
};

// Generic POST request
export const postData = async (endpoint, data = {}) => {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    return handleErrors(error);
  }
};

// Form submission function
export const submitForm = async (formData) => {
  return postData('contact', formData);
};
