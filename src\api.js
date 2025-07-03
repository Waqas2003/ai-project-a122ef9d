import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.cosmetics.com'
});

export default api;