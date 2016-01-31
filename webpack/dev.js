var path = require('path');
var webpack = require('webpack');
var config = require('./common')('development');

module.exports = function() {
  config.plugins = [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ];

  return config;
};
