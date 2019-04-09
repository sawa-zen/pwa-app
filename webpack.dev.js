const fs = require('fs');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'devtool.source-map',
  devServer: {
    contentBase: 'public',
    host: '0.0.0.0',
    disableHostCheck: true,
    historyApiFallback: true,
    https: {
      cert: fs.readFileSync('cert.pem'),
      key: fs.readFileSync('key.pem'),
      // cert: fs.readFileSync('localhost.crt'),
      // key: fs.readFileSync('localhost.key'),
    },
  },
});
