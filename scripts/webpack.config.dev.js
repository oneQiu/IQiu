const WebpackBaseConfig = require('./webpack.config.base');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer'); // 代码分析报告
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { merge } = require('webpack-merge');
const Path = require('path');

const isBundle = process.env.NODE_ENV === 'bundle';
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
        new BundleAnalyzerPlugin({
            analyzerMode: isBundle ? 'static' : 'disabled',
            generateStatsFile: false,
        }),
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
