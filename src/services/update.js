import axios from 'axios';

axios.defaults.withCredentials = true;

const baseUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://pandafeed.herokuapp.com/api'
    : 'http://localhost:3000/api';

export const createUpdate = (data) => {
  return axios.post(`${baseUrl}/create-update`, data);
};
