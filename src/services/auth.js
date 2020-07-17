import axios from 'axios';

axios.defaults.withCredentials = true;

const baseUrl = 'http://localhost:3000/api';

export const auth = async (isRegister, credentials) => {
  return await axios.post(
    `${baseUrl}/${isRegister ? 'signup' : 'login'}`,
    credentials
  );
};

export const logout = () => {
  return axios.post(`${baseUrl}/logout`);
};
