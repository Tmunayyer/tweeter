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

    return response.data.data;
  },
  post: async (url, data) => {
    const params = data ? data : {};

    const response = await axios.post(url, params);

    return response.data.data;
  },
  update: async (url, data) => {
    const params = data ? data : {};

    const response = await axios.put(url, params);

    return response.data.data;
  },
  delete: async (url, data) => {
    const params = data ? data : {};

    const response = await axios.delete(url, { params: params });

    return response.data.data;
  }
};
