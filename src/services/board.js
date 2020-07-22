import axios from 'axios';

axios.defaults.withCredentials = true;

const baseUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://pandafeed.herokuapp.com/api'
    : 'http://localhost:3000/api';

export const createBoard = (data) => {
  return axios.post(`${baseUrl}/create-board`, data);
};

export const getBoards = () => {
  return axios.get(`${baseUrl}/get-boards`);
};

export const getBoard = (url) => {
  return axios.get(`${baseUrl}/get-board${url}`);
};
