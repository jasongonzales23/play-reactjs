'use strict';

var path = require('path');

module.exports = {

  // the project dir
  context: __dirname,
  entry: ['./assets/javascripts/components/app'],

  resolve: {
    root: [path.join(__dirname, 'scripts'),
      path.join(__dirname, 'assets/javascripts'),
      path.join(__dirname, 'assets/stylesheets')],
    extensions: ['', '.webpack.js', '.web.js', '.jsx', '.js.jsx', '.react.jsx', '.scss', '.css', 'config.js', '.js']
  },
  module: {
    loaders: [
      {test: /\.jsx$/, exclude: /node_modules/, loader: 'babel-loader'}
    ]
  },

  output: {
    filename: 'client-bundle.js',
    path: '../app/assets/javascripts'
  },

  //for dev only, need to make this environment dependent so that build is
  //compressed for prod
  devtool: 'eval-source-map'
};
