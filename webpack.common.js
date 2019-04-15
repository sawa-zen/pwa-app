const path = require('path');
const webpack = require('webpack');
const projectRootPath = path.resolve(__dirname, './');
const assetsPath = path.resolve(projectRootPath, './public');

module.exports = {
  entry: `${__dirname}/src/index.jsx`,
  output: {
    path: assetsPath,
    publicPath: '/',
    filename: 'pwa-app.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        options: {
          compact: false,
          cacheDirectory: true,
        },
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
};
