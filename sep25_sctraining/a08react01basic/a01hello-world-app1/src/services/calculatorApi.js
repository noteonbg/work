import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api';

export const addNumbers = async (a, b, username, password) => {
  try {
    const response = await axios.get(`${BASE_URL}/add`, {
      params: { a, b },
      auth: {
        username,
        password
      }
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      return 'Unauthorized';
    }
    throw error;
  }
};

export const multiplyNumbers = async (a, b) => {
  const response = await axios.get(`${BASE_URL}/multiply`, {
    params: { a, b }
  });
  return response.data;
};
