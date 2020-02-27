import axios from 'axios';

/**
 * This might be overkill for the scope of this project
 *  but it would be nice to have our own interface defined
 *  incase we want to sign the objects at a later time. There
 *  would be one central place where all calls come from.
 */

export default {
  get: async (url, data) => {
    const params = data ? data : {};

    const response = await axios.get(url, params);

    return response.data;
  },
  post: (url, data) => {
    const params = data ? data : {};

    return axios.post(url, params);
  },
  update: async (url, data) => {
    const params = data ? data : {};

    const response = await axios.put(url, params);

    return response.data.data;
  },
  delete: (url, data) => {
    const params = data ? data : {};

    return axios.delete(url, { params: params });
  }
};
