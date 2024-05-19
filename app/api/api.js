import axios from 'axios';

const API_URL = 'http://localhost:3080/api/users'; // Ganti YOUR_PORT dengan port API Anda

const api = axios.create({
  baseURL: API_URL,
});

export const loginUser = async (email, password) => {
  try {
    const response = await api.post('/login', { email, password });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }

};
console.log(loginUser(email, password));