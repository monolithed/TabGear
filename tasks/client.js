let path = require('path'),
	fs = require('fs');

let Webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let PreCSS = require('precss');
let PostCSSImport = require('postcss-import');
let Autoprefixer = require('autoprefixer');
var UnusedFilesWebpackPlugin = require("unused-files-webpack-plugin").default;

const DIR_NAME = path.join(__dirname, '..');

module.exports = {
	entry: [
		'./views/index.jsx'
	],

	output: {
		path    : `${DIR_NAME}/cache`,
		filename: 'build.js',
	},

	resolve: {
		extensions: ['', '.js', '.jsx']
	},

	// devtool: 'source-map',
	// target : 'web',

	plugins: [
		new Webpack.optimize.OccurenceOrderPlugin(),
		new Webpack.optimize.DedupePlugin(),
		new UnusedFilesWebpackPlugin(),

		new Webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify("production")
			}
		}),

		new Webpack.optimize.UglifyJsPlugin({
			compressor: {
				warnings: false
			}
		})
	],

	module: {
		loaders: [
			{
				test   : /\.(js|jsx)$/,
				loaders: ['babel'],
				include: `${DIR_NAME}/views`
			},

			{
				test   : /\.css$/,
				loaders: ['style', 'css', 'postcss']
			},

			{
				test   : /\.(jpe?g|png)(\?[a-z0-9=&.]+)?$/,
				loader: 'url-loader?limit=10000&mimetype=application/font-woff'
			},

			{
				test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
				loader: 'base64-font-loader'
			}
		]
	},

	postcss (Webpack) {
		return [
			PreCSS,
			Autoprefixer,
			PostCSSImport({
				addDependencyTo: Webpack
			})
		];
	}
};
