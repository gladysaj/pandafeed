import axios from 'axios';

axios.defaults.withCredentials = true;

const baseUrl = 'http://localhost:3000/api';

export const createCompany = (data) => {
  return axios.post(`${baseUrl}/create-company`, data);
};
