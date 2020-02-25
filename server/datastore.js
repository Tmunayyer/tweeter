/**
 * This is the module that will be used by our server/endpoints.
 */
const { query, queryOne } = require('../database/query');

const getAllTwits = () => {
  const data = query('get-all');

  return data;
};

const getUserTwits = (username) => {
  const data = query('get-user', username);

  return data;
};

const insertTwit = (username, twit) => {
  const data = query('insert-twit', { username, twit });

  return data;
};
const updateTwit = (twit) => {
  const data = queryOne('update-twit', username, twit.id);

  return data;
};
const deleteTwit = (twit) => {
  const data = queryOne('delete-twit', twit.id);

  return data;
};

module.exports = {
  insertTwit: insertTwit
};
