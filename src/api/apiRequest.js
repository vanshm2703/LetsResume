import axios from 'axios';

export const apiRequest = async (url, method, data) => {
  try {
    const response = await axios({
      method: method,
      url: url,
      data: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
}
