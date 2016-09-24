let path = require('path'),
	fs = require('fs');

let Webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let PreCSS = require('precss');
let PostCSSImport = require('postcss-import');
let Autoprefixer = require('autoprefixer');

const DIR_NAME = path.join(__dirname, '..');

module.exports = {
	entry: [
		'webpack-hot-middleware/client',
		'./views/index.jsx'
	],

	output: {
		path      : `${DIR_NAME}/cache/static`,
		filename  : 'build.js',
		publicPath: '/static/'
	},

	resolve: {
		extensions: ['', '.js', '.jsx', '.css']
	},

	debug  : true,
	target : 'web',
	devtool: 'cheap-module-eval-source-map',

	node: {
		__dirname: true
	},

	plugins: [
		new Webpack.optimize.OccurenceOrderPlugin(),
		new Webpack.HotModuleReplacementPlugin(),
		new Webpack.NoErrorsPlugin(),

		new Webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify("development")
			}
		}),

		/*
		new HtmlWebpackPlugin({
			title   : 'Ахмат-Хаджи Кадыров',
			filename: 'views/index.html',
			showErrors: true,
			template: require('html-webpack-template'),
		})
		*/
	],

	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				loaders: ['babel'],
				include: `${DIR_NAME}/views`
			},

			{
				test   : /\.css$/,
				loaders: ['style', 'css', 'postcss']
			},

			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				loader: 'file-loader'
			}
		]
	},

	postcss (Webpack) {
		return [
			PreCSS,
			PostCSSImport({
				addDependencyTo: Webpack
			}),
			Autoprefixer,
		];
	}
};
