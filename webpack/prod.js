var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = require('./common')('production');

config.plugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }),

  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      warnings: false
    }
  }),

  new ExtractTextPlugin('app.css', { allChunks: true }),
];


module.exports = config;

