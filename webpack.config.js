require('dotenv').config();

const path = require('path');

module.exports = {
  mode: process.env.MODE || 'production',
  entry: './src/index.jsx',

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  }
};
