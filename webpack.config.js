var path = require('path');
var webpack = require('webpack');

var SRC_DIR = path.join(__dirname, '/client/src'); // index.jsx, /components
var DIST_DIR = path.join(__dirname, '/public/dist'); // bundle.js, index.html

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};