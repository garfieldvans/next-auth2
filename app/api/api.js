import axios from 'axios';

const API_URL = 'http://localhost:3080/api/users'; // Sesuaikan URL API Anda

const api = axios.create({
  baseURL: API_URL,
});

// Interceptor untuk menambahkan token autentikasi ke setiap permintaan
api.interceptors.request.use(
  config => {
    if (typeof window !== 'undefined') { // Pastikan hanya dijalankan di client-side
      const token = localStorage.getItem('token'); // Atau cara lain untuk mendapatkan token
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export const addUser = async (userData) => {
  try {
    // Cek apakah email sudah digunakan
    const users = await getUsers();
    const existingUser = users.find(user => user.email === userData.email);
    if (existingUser) {
      throw new Error('Email has already been used. Please use a different email.');
    }
    
    // Jika email belum digunakan, tambahkan user
    const response = await api.post("/signup", userData);
    console.log("User added successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error adding user:", error.response ? error.response.data : error.message);
    throw error.response ? error.response.data : new Error('Email has already been used. Please use a different email.');
  }
};

export const getUsers = async () => {
  const response = await api.get("/");
  return response.data; // Anggap saja response.data berisi data pengguna
};


export const checkToken = () => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');
    if (token) {
      console.log('Token found:', token);
    } else {
      console.log('No token found');
    }
  }
};


export const loginUser = async (email, password) => {
  try {
    const response = await api.post('/login', { email, password });
    console.log('Login successful:', response.data);

    // Pastikan respons memiliki token
    if (response.data.token) {
      if (typeof window !== 'undefined') {
        localStorage.setItem('token', response.data.token);
        console.log('Token stored in localStorage:', localStorage.getItem('token'));
      }
    } else {
      console.error('Token not found in response');
    }
    return response.data;
  } catch (error) {
    console.error('Login error:', error.response ? error.response.data : error.message);
    throw error.response ? error.response.data : new Error('Unknown error');
  }
};

export const deleteUser = async (userId) => {
  try {
    const response = await api.delete(`/delete?id=${userId}`);
    console.log("User deleted successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error deleting user:", error.response ? error.response.data : error.message);
    throw error.response ? error.response.data : new Error('Unknown error');
  }
};
