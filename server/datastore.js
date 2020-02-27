/**
 * This is the module that will be used by our server/endpoints.
 *  usually it would take in a query statement and params but ill
 *  just make fake statements.
 */
const { query } = require('../database/query');

const getAllTwits = () => {
  const data = query('get-all');

  return data;
};

const insertTwit = (username, twit) => {
  const data = query('insert-twit', { username, twit });

  return data;
};
const updateTwit = (twit_id, twit) => {
  const data = query('update-twit', { twit_id, twit });

  return data;
};
const deleteTwit = (twit_id) => {
  const data = query('delete-twit', twit_id);

  return data;
};

module.exports = {
  getAllTwits: getAllTwits,
  insertTwit: insertTwit,
  updateTwit: updateTwit,
  deleteTwit: deleteTwit
};
