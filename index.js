require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

// some custome middleware
const configureRoutes = require('./server/routes');

/**
 * ==========
 * MIDDLEWEAR
 * ==========
 */

// css from node modules
app.use('/mod-css', express.static(__dirname + '/node_modules'));
// serve up static files
app.use(express.static('public'));
// parsing
app.use(bodyParser.json());

/**
 * ======
 * ROUTES
 * ======
 */

configureRoutes(app);

/**
 * ============
 * SERVER START
 * ============
 */
app.listen(port, () => console.log(`\n\rServer started at localhost:${port}`));
