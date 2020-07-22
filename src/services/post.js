import axios from 'axios';

axios.defaults.withCredentials = true;

const baseUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://pandafeed.herokuapp.com/api'
    : 'http://localhost:3000/api';

export const createPost = (data) => {
  return axios.post(`${baseUrl}/create-post`, data);
};

export const getPosts = (boardId) => {
  return axios.get(`${baseUrl}/get-posts/${boardId}`);
};
