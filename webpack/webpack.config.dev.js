const WebpackBaseConfig = require('./webpack.config.base');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { merge } = require('webpack-merge');
const Path = require('path');

module.exports = merge(WebpackBaseConfig, {
    devtool: 'eval-source-map',
    devServer: {
        // Fix history模式下404
        historyApiFallback: true,
        port: 7777,
        host: 'localhost',
        hot: true,
        contentBase: Path.join(__dirname, '../dist/'),
        overlay: false,
    },
    plugins: [
        // react 热加载
        new ReactRefreshWebpackPlugin({
            overlay: false,
        }),
    ],
    // 减少体积 提高性能
    optimization: {
        runtimeChunk: true,
    },
    stats: 'errors-warnings',
});
