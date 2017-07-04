import axios from 'axios';

const API_URL = 'http://192.168.0.83/deep-thoughts.dev/wp-json/wp/v2';

const hnapi = {
  getTopStories: () => {
    return axios.get(`${API_URL}/posts`);
  },
  getItem: (id) => {
    return axios.get(`${API_URL}/item/${id}`);
  },
  getUser: (username) => {
    return axios.get(`${API_URL}/user/${username}`);
  }
};

export default hnapi;
