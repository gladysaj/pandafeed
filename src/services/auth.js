import axios from 'axios';

axios.defaults.withCredentials = true;

const baseUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://pandafeed.herokuapp.com/api'
    : 'http://localhost:3000/api';

export const auth = async (isRegister, credentials) => {
  return await axios.post(
    `${baseUrl}/${isRegister ? 'signup' : 'login'}`,
    credentials
  );
};

export const logout = () => {
  return axios.post(`${baseUrl}/logout`);
};
