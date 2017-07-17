
var webpack = require('webpack');

module.exports = [{
    name: "server",
    entry: "./src/satellite.js",
    target: "node",
    output: {
      libraryTarget: "commonjs2",
      path: __dirname + "/dist",
      filename: 'webpack-satellite.js'
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin()
    ]
  },
  {
    name: "server",
    entry: "./src/satellite.js",
    target: "webworker",
    output: {
      libraryTarget: "umd",
      path: __dirname + "/dist",
      filename: 'webworker-satellite.js'
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin()
    ]
  }];