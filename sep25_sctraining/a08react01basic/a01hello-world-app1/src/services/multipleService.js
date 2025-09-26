// multipleService.js
import axios from 'axios';

const getFifthMultiple = (number) => {
  return axios.get('http://localhost:8080/api/multiply/fifth', {
    params: { number }
  });
};

const postEighthMultiple = (number) => {
  return axios.post('http://localhost:8080/api/multiply/eighth', {
    number: parseInt(number)
  });
};

export default {
  getFifthMultiple,
  postEighthMultiple
};
