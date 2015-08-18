var webpack = require('webpack');

var BUILD_DIR = 'build/';

var config = module.exports = {
  entry: [
    __dirname + '/node_modules/babel-core/browser-polyfill.js',
    './src/main.js'
  ],
  output: {
    filename: BUILD_DIR + '[name].js'
  },
  module: {
    loaders: [
      {
        test: new RegExp(__dirname + '\/[src|test].*\.jsx*$'),
        loaders: [
          'babel-loader?stage=0'
        ]
      }
   ],
    noParse : [
      /\/babel-core\/browser-polyfill\.js$/
    ],
  },
  resolve: {
    extensions: ["", ".webpack.js", ".web.js", ".js", ".jsx"]
  },
  devtool: "#inline-source-map",
}
