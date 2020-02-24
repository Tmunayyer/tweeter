require('dotenv').config();

const express = require('express');
const app = express();

const port = process.env.PORT;

/**
 * ==========
 * MIDDLEWEAR
 * ==========
 */

// css from node modules
app.use('/mod-css', express.static(__dirname + '/node_modules'));

app.use(express.static('public'));

/**
 * ======
 * ROUTES
 * ======
 */

/**
 * ============
 * SERVER START
 * ============
 */
app.listen(port, () => console.log(`Server started at localhost:${port}`));
