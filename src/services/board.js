import axios from 'axios';

axios.defaults.withCredentials = true;

const baseUrl = 'http://localhost:3000/api';

export const createBoard = (data) => {
  return axios.post(`${baseUrl}/create-board`, data);
};

export const getBoards = () => {
  return axios.get(`${baseUrl}/get-boards`);
};
