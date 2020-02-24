require('dotenv').config();

const path = require('path');

module.exports = {
  mode: process.env.MODE,
  entry: './src/index.js',

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
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
