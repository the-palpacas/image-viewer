const path = require('path');
var webpack = require('webpack');

var SRC_DIR = path.join(__dirname, '/client/src'); // index.jsx, /components
var DIST_DIR = path.join(__dirname, '/public/dist'); // bundle.js, index.html


module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        include: [
          path.resolve(__dirname, "./client/src")
        ],
        exclude: [
          path.resolve(__dirname, "./node_modules")
        ],
        loader: "babel-loader",
        options: {
          presets: ['react', 'es2015']
        },
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          },
        ],
      },
    ],
  },
};
