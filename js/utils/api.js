import axios from 'axios';



const API_URL = 'http://www.info.com/';



const merejaApi = {
    getCategories: () => {
    return axios.get(`${API_URL}/categories`);
  },
  getCompanies: () => {
    return axios.get(`${API_URL}/categories/${id}/companies`);
  },
   getServices: () => {
    return axios.get(`${API_URL}/companies/${id}/services`);
  },
   getServiceDetail: () => {
    return axios.get(`${API_URL}/services/${id}/details/${id}`);
  },
   
};

export default merejaApi;