import axios from 'axios';

const API_URL = 'http://localhost:3080/api/users'; // Sesuaikan URL API Anda

const api = axios.create({
  baseURL: API_URL,
});

export const loginUser = async (email, password) => {
  try {
    const response = await api.post('/login', { email, password });
    console.log('Login successful:', response.data);
    return response.data; // Assuming response.data contains user data and passwordHash
  } catch (error) {
    console.error('Login error:', error.response ? error.response.data : error.message);
    throw error.response ? error.response.data : new Error('Unknown error');
  }
};
