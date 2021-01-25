const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin'); // tslint
const ProgressBar = require('progress-bar-webpack-plugin'); // 进度条
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // css分离
const Path = require('path');
const Chalk = require('chalk');

function resolve(path) {
    return Path.resolve(__dirname, path);
}
const isDev = process.env.NODE_ENV !== 'production';
/** @type {import('webpack').Configuration} */
const WebpackBaseConfig = {
    mode: 'development',
    entry: resolve('../src/index.tsx'),
    output: {
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /.(t|j)sx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: [isDev && require.resolve('react-refresh/babel')].filter(Boolean),
                    },
                },
            },
            {
                test: /.(cs|les)s$/,
                use: [
                    !isDev ? MiniCssExtractPlugin.loader : 'style-loader',
                    'css-loader',
                    {
                        loader: 'less-loader',
                        options: {
                            lessOptions: { javascriptEnabled: true },
                        },
                    },
                ].filter(Boolean),
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: 'file-loader',
            },
            {
                test: /\.md$/i,
                use: 'raw-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.json', '.ts', '.tsx', '.js', '.jsx', '.less'],
        alias: {
            '@': resolve('../src'),
            '@redux': resolve('../src/redux'),
            '@pages': resolve('../src/pages'),
            '@components': resolve('../src/components'),
            '@utils': resolve('../src/utils'),
            '@routes': resolve('../src/routes'),
            '@styles': resolve('../src/styles'),
            '@configs': resolve('../src/configs'),
            '@typings': resolve('../src/typings'),
        },
    },
    plugins: [
        // 打包进度条
        new ProgressBar({
            format:
                Chalk.green.bold('build  ') +
                Chalk.blueBright('[:bar]') +
                Chalk.cyan.bold(':percent') +
                ' (' +
                Chalk.blue.magenta(':elapsed') +
                ' seconds) ',
            clear: true,
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
            eslint: {
                files: resolve('../src/**/*.{ts,tsx,jsx,js}'),
            },
            typescript: {
                enabled: true,
                configFile: resolve('../tsconfig.json'),
                build: false,
            },
        }),
        // copy静态文件
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: resolve('../src/static'),
                    to: 'static',
                },
            ],
        }),
    ],
};

module.exports = WebpackBaseConfig;