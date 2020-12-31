const { merge } = require('webpack-merge');
const WebpakBaseConfig = require('./webpack.config.base');
// 压缩JS
const TerserWwebpackPlugin = require('terser-webpack-plugin');
// 压缩CSS webpack5已弃用改插件
const OptimizeCssAssets = require('optimize-css-assets-webpack-plugin');
// const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 代码分析报告
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const Path = require('path');

function resolve(path) {
    return Path.resolve(__dirname, path);
}
const isBundle = !!process.env.Bundle;
console.log(isBundle);
module.exports = merge(WebpakBaseConfig, {
    output: {
        path: resolve('../dist'),
        filename: 'js/[name].[hash].js',
    },
    devtool: 'source-map',
    optimization: {
        minimizer: [
            new TerserWwebpackPlugin({
                parallel: true, // 多线程
            }),
        ],
    },
    mode: 'production',
    plugins: [
        // css压缩
        // new CssMinimizerWebpackPlugin({
        //   parallel: true
        // }),
        new BundleAnalyzerPlugin({
            analyzerMode: isBundle ? 'static' : 'disabled',
            generateStatsFile: false,
        }),
        new OptimizeCssAssets({
            assetNameRegExp: /\.css\.*(?!.*map)/g,
            cssProcessorOptions: {
                discardComments: { removeAll: true },
                safe: true,
                autoprefixer: {
                    disabled: true,
                },
            },
        }),
        // css分离
        new MiniCssExtractPlugin({
            filename: 'style/[hash].css',
        }),
    ],
});
