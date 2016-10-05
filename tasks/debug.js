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

	externals: {
		"chrome-stub": "chrome"
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

		new Webpack.ProvidePlugin({
			'chrome-stub/browser': 'chrome'
		}),

		new Webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify("development")
			}
		})
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
			PostCSSImport({
				addDependencyTo: Webpack
			}),
			Autoprefixer,
		];
	}
};
