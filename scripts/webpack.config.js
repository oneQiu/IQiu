const WebpackDevConfig = require('./webpack.config.dev');
const WebpackProdConfig = require('./webpack.config.prod');

module.exports = () => {
  const isDev = process.env.NODE_ENV !== 'production';
  return isDev ? WebpackDevConfig : WebpackProdConfig;
}