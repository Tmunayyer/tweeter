import axios from 'axios';

/**
 * This might be overkill for the scope of this project
 *  but it would be nice to have our own interface defined
 *  incase we want to sign the objects at a later time. There
 *  would be one central place where all calls come from.
 */

export default {
  get: (url, data) => {
    const params = data ? data : {};

    return axios.get(url, params);
  },
  post: (url, data) => {
    const params = data ? data : {};

    return axios.post(url, params);
  },
  update: (url, data) => {},
  delete: (url, data) => {}
};
