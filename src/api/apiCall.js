import { apiRequest } from "./apiRequest";

export const registerapi = async (formdata) => {
  try {
    const url = "https://06c9025e-6f17-452e-9a86-112ab0c650a7-00-yrcqkh4jxzfb.sisko.replit.dev:5000"; // Base URL
    const response = await apiRequest(`${url}/users/register`, 'POST', formdata);
    return response;
  } catch (error) {
    console.error('Registration failed:', error);
    throw error;
  }
}
