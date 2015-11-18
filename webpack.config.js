'use strict';

// Default to the hot loading dev config
var webpack = require('webpack');
var path = require('path');
var sassLoaders = [
  'style',
  'css-loader',
  'autoprefixer-loader?browsers=last 3 versions',
  'sass-loader'
];
module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  output: {
    path: __dirname,
    filename: 'dist/js/bundle.js',
    publicPath: '/js/'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: sassLoaders.join('!'),
        exclude: /sass_includes/
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
        include: path.join(__dirname, 'src')
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
