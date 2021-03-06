const datastore = require('./datastore');

const api_twits = {
  endpoint: '/api/twits',

  // =================

  get: (req, res) => {
    const twits = datastore.getAllTwits();

    res.send({
      message: 'success',
      data: twits
    });
  },

  // =================

  post: (req, res) => {
    const { username, twit } = req.body;

    datastore.insertTwit(username, twit);

    res.send('success');
  },

  // =================

  put: (req, res) => {
    const { twit_id, twit } = req.body;

    const updated_twit = datastore.updateTwit(parseInt(twit_id), twit);

    res.send({ message: 'success', data: updated_twit });
  },

  // =================

  remove: (req, res) => {
    const { twit_id } = req.query;

    const removed_twit = datastore.deleteTwit(parseInt(twit_id));

    res.send({ message: 'success', data: removed_twit });
  }
};

const routes = [api_twits];

/**
 * Takes in the express app obect and configures the handlers to
 *  the attached endpoint.
 *
 * @param {object} app
 */
const configureRoutes = (app) => {
  routes.forEach((route) => {
    const { endpoint, get, post, put, remove } = route;

    if (get) app.get(endpoint, get);
    if (post) app.post(endpoint, post);
    if (put) app.put(endpoint, put);
    if (remove) app.delete(endpoint, remove);
  });
};

module.exports = configureRoutes;
