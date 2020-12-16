const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const CopyWebpackPlugin = require("copy-webpack-plugin")
const ProgressBar = require('progress-bar-webpack-plugin');
// tslint
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
// css分离
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Path = require('path');
const Chalk = require('chalk');

function resolve(path) {
  return Path.resolve(__dirname, path);
}

/** @type {import('webpack').Configuration} */
const WebpackBaseConfig = {
  mode: 'development',
  entry: resolve('../src/index.tsx'),
  output: {
    path: resolve('../dist'),
    filename: 'js/[name].[hash].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /.(t|j)sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          },
        },
      },
      {
        test: /.(cs|les)s$/,
        use: [process.env.NODE_ENV === 'production' && MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'].filter(Boolean),
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: 'file-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.json', '.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@': resolve('../src'),
      '@redux': resolve('../src/redux'),
      '@pages': resolve('../src/pages'),
      '@components': resolve('../src/components'),
      '@utils': resolve('../src/utils'),
      '@routes': resolve('../src/routes'),
    },
  },
  plugins: [
    // 打包进度条
    new ProgressBar({
      format: Chalk.green.bold('build  ') + '[:bar]' + Chalk.cyan.bold(':percent') + ' (' + Chalk.blue.magenta(':elapsed') + ' seconds) ',
      clear: false,
    }),
    // 清除dist
    new CleanWebpackPlugin(),
    // Html模板
    new HtmlWebpackPlugin({
      template: resolve('../public/index.html'),
      minify: true,
    }),
    new ForkTsCheckerWebpackPlugin({
      async: false,
      typescript: {
        enabled: true,
        configFile: resolve('../tsconfig.json'),
        build: false,
      },
		}),
    // copy静态文件
    // new CopyWebpackPlugin({
    // 	patterns: [
    // 		{
    // 			from: "/src/*/*.html",
    // 			globOptions: {
    // 				dot: true,
    // 			}
    // 		}
    // 	]
    // }),
  ],
};

module.exports = WebpackBaseConfig;
