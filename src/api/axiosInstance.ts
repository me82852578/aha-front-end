import axios from 'axios';

export const baseUrl = 'http://localhost:3000/api';

export const axiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 100000,
  headers: { Authorization: `Bearer ${localStorage.getItem('token') || ''}` },
});
