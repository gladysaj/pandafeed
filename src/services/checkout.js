import axios from 'axios';

axios.defaults.withCredentials = true;

const baseUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://pandafeed.herokuapp.com/api'
    : 'http://localhost:3000/api';

export const checkout = async (data) => {
  return await axios.post(`${baseUrl}/checkout`, data);
};
