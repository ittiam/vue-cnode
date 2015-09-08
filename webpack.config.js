var webpack = require('webpack')
var vue = require('vue-loader')

var AUTOPREFIXER_BROWSERS = [
  'Android 2.3',
  'Android >= 4',
  'Chrome >= 20',
  'Firefox >= 24', // Firefox 24 is the latest ESR
  'Explorer >= 9',
  'iOS >= 6',
  'Safari >= 6'
]

module.exports = {
  entry: {
    app: ['./src/main.js']
  },
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.vue$/, loader: vue.withLoaders({
        js: 'babel?optional[]=runtime'
      }) },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel?optional[]=runtime' },
      { test: /\.css$/, loader: 'style!css!autoprefixer'},
      { test: /\.less/, loader: 'style!css!autoprefixer!less'}
    ]
  },
  devtool: 'source-map'
}
