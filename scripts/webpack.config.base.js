const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const ProgressBar = require("progress-bar-webpack-plugin")
// tslint
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin")
const Path = require("path")
const Chalk = require("chalk")

function resolve(path) {
	return Path.resolve(__dirname, path)
}

/** @type {import('webpack').Configuration} */
const WebpackBaseConfig = {
	mode: "development",
	entry: resolve("../src/index.tsx"),
	output: {
		path: resolve("../dist"),
		filename: "js/[name].[hash].js",
	},
	module: {
		rules: [
			{
				test: /.(t|j)sx?$/,
				exclude: /node_modules/,
				use: "ts-loader",
			},
			{
				test: /.(cs|les)s$/,
				use: ["style-loader", "css-loader", "less-loader"],
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: "file-loader",
			},
		],
	},
	resolve: {
		extensions: [".json", ".ts", ".tsx", ".js", ".jsx"],
		alias: {
			"@": resolve("../src"),
		},
	},
	plugins: [
		// 打包进度条
		new ProgressBar({
			format:
				Chalk.green.bold("build  ") +
				Chalk.yellow("[:bar]") +
				Chalk.cyan.bold(":percent") +
				" (" +
				Chalk.blue.magenta(":elapsed") +
				" seconds) ",
			clear: false,
		}),
		// 清除dist
		new CleanWebpackPlugin(),
		// Html模板
		new HtmlWebpackPlugin({
			template: resolve("../public/index.html"),
			minify: true,
		}),
		new ForkTsCheckerWebpackPlugin({
			async: false,
			typescript: {
				enabled: true,
				configFile: resolve("../tsconfig.json"),
				build: false,
			},
		}),
		// copy静态文件
		// new CopyWebpackPlugin([]),
	],
}

module.exports = WebpackBaseConfig
