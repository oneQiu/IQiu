const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { DllPlugin } = require('webpack');
const WebpackBar = require('webpackbar');
const Path = require('path');

function resolve(path) {
  return Path.resolve(__dirname, path);
}

/** @type {import('webpack').Configuration} */
const WebpackBaseConfig = {
  mode: 'development',
  entry: {
    index: [resolve('../src/index.ts')],
    react: ['react', 'react-router-dom', 'react-redux']
  },
  watch: true,
  output: {
    // 输出点动态链接库
    path: resolve('../dist/dll'),
    publicPath: '/dist/',
    filename: '[name].[hash].dll.js',
    library: '[name]_dll_[hash]'
  },
  module: {
    rules: [
      {
        test: /.(t|j)sx?$/,
        include: [resolve(__dirname, '../src')],
        exclude: [resolve(__dirname, '../node_modules')],
        use: 'ts-loader',
      },
      {
        test: /.(cs|les)s$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.json', '.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@': resolve('../src'),
    },
  },
  plugins: [
    // 打包进度条
    new WebpackBar(),
    // 分离打包 性能优化
    new DllPlugin({
      // 需要和output的libary一致
      name: '[name]_dll_[hash]',
      path: Path.join(__dirname, '../dist/dll', '[name].mainfest.json')
    }),
    // 清除dist
    new CleanWebpackPlugin(),
    // Html模板
    new HtmlWebpackPlugin({
      template: resolve('../public/index.html'),
    }),
    // copy静态文件
    // new CopyWebpackPlugin([]),
  ],
  devServer: {
    clientLogLevel: 'silent',
  },
};

module.exports = WebpackBaseConfig;
