import axios from 'axios';

const API_URL = '';

const merejaApi = {
    getCategories: () => {
    return axios.get(`${API_URL}/categories`);
  },
  getCompanies: () => {
    return axios.get(`${API_URL}/categories/${id}`);
  },
   getServices: () => {
    return axios.get(`${API_URL}/categories/${id}/services`);
  },
   getServiceDetail: () => {
    return axios.get(`${API_URL}/categories/${id}/services/${id}`);
  } 
};

export default merejaApi;