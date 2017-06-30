import axios from 'axios';

<<<<<<< HEAD
const API_URL = 'http://www.info.com/';
=======
const API_URL = '';
>>>>>>> 919e2652d7f4c7ea28d119157d8ca75fcd1b0ccb

const merejaApi = {
    getCategories: () => {
    return axios.get(`${API_URL}/categories`);
  },
  getCompanies: () => {
<<<<<<< HEAD
    return axios.get(`${API_URL}/categories/${id}/companies`);
  },
   getServices: () => {
    return axios.get(`${API_URL}/companies/${id}/services`);
  },
   getServiceDetail: () => {
    return axios.get(`${API_URL}/services/${id}/details/${id}`);
=======
    return axios.get(`${API_URL}/categories/${id}`);
  },
   getServices: () => {
    return axios.get(`${API_URL}/categories/${id}/services`);
  },
   getServiceDetail: () => {
    return axios.get(`${API_URL}/categories/${id}/services/${id}`);
>>>>>>> 919e2652d7f4c7ea28d119157d8ca75fcd1b0ccb
  } 
};

export default merejaApi;