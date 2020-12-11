const { merge } = require('webpack-merge');
const WebpakBaseConfig = require('./webpack.config.base');
// 压缩JS
const TerserWwebpackPlugin = require('terser-webpack-plugin');
// 压缩CSS
const OptimizeCssAssets = require('optimize-css-assets-webpack-plugin');

module.exports = merge(WebpakBaseConfig, {
  devtool: 'source-map',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserWwebpackPlugin({
        parallel: true, // 多线程
      }),
    ],
  },
  plugins: [
    new OptimizeCssAssets({
      assetNameRegExp: /.optimize.css$/g,
    })
  ]
});
