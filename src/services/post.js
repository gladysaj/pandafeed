import axios from 'axios';

axios.defaults.withCredentials = true;

const baseUrl = 'http://localhost:3000/api';

export const createPost = (data) => {
  return axios.post(`${baseUrl}/create-post`, data);
};
