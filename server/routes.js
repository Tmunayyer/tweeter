const datastore = require('./datastore');

const api_twits = {
  endpoint: '/api/twits',
  get: (req, res) => {
    const twits = datastore.getAllTwits();

    res.send({
      message: 'success',
      data: twits
    });
  },
  post: (req, res) => {
    const username = 'tempuser';
    const { twit } = req.body;

    datastore.insertTwit(username, twit);

    res.send('success');
  },
  put: false,
  remove: false
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
