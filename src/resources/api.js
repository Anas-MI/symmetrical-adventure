import axios from 'axios';
const REACT_APP_API_URL = 'https://api.dev.ridebeyond.com';

const api = axios.create({
  baseURL: REACT_APP_API_URL,
  withCredentials: true,
});

export const apiUrl = REACT_APP_API_URL;
export default api;
