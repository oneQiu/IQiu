const WebpackDevConfig = require('./webpack.config.dev');
const WebpackProdConfig = require('./webpack.config.prod');

module.exports = () => (process.env.NODE_ENV !== 'production' ? WebpackDevConfig : WebpackProdConfig);
