var path = require('path'),
	fs = require('fs');

var Webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let PreCSS = require('precss');
var PostCSSImport = require('postcss-import');
let Autoprefixer = require('autoprefixer');

const DIR_NAME = path.join(__dirname, '..');

module.exports = {
	entry: [
		'./views/index.jsx'
	],

	output: {
		path      : `${DIR_NAME}/cache/static`,
		filename  : 'build.js',
		publicPath: '/static/'
	},

	resolve: {
		extensions: ['', '.js', '.jsx']
	},

	devtool: 'source-map',

	plugins: [
		new Webpack.optimize.OccurenceOrderPlugin(),
		// new Webpack.optimize.DedupePlugin(),

		new Webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: false
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
				loader : 'style-loader!css-loader!postcss-loader',
				include: `${DIR_NAME}/views`
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
