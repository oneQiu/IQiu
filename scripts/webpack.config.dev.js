const { merge } = require("webpack-merge");
const Path = require('path');
const WebpackBaseConfig = require('./webpack.config.base');

module.exports = merge(WebpackBaseConfig, {
  devtool: 'eval',
  devServer: {
    port: 7777,
    host: 'localhost',
    hot: true,
    contentBase: Path.join(__dirname, '../dist/'),
    overlay: true,
  }
})