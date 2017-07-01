import axios from 'axios';

const API_URL = 'http://localhost/deep-thoughts.dev/wp-json/wp/v2/';

const hnapi = {
  getTopStories: () => {
    return axios.get(`${API_URL}/posts`);
  },
  getItem: (id) => {
    return axios.get(`${API_URL}/posts/${id}`);
  },
  getUser: (username) => {
    return axios.get(`${API_URL}/posts/${username}`);
  }
};

export default hnapi;
