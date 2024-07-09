import { apiRequest } from "./apiRequest";
import axios from 'axios';

export const registerapi = async (formdata) => {
  try {
    const response = await axios.post('http://localhost:5000/users/register', formdata);
    console.log('API Response:', response.data);
  } catch (error) {
    console.error('API request failed:', error);
  }
};

export const registerList = async () => {
  try {
    const response = await axios.get('http://localhost:5000/users');
    return response.data; 
  } catch (error) {
    throw error; 
  }
};

   