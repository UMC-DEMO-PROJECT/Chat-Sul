import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const axiosBasic = axios.create();

axiosBasic.defaults.baseURL = import.meta.env.VITE_API_URL;
