let path = require('path');

let Webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let PreCSS = require('precss');
let PostCSSImport = require('postcss-import');
let Autoprefixer = require('autoprefixer');

const DIR_NAME = path.join(__dirname, '..');

module.exports = {
	entry: [
		'webpack-hot-middleware/client',
		'./_locales/ru/messages.json',
		'./config.js',
		'./views/index.js'
	],

	output: {
		path: `${DIR_NAME}/cache`,
		filename: 'build.js',
		publicPath: '/'
	},

	resolve: {
		extensions: ['', '.js', '.jsx', '.json', '.css', '.png'],

		alias: {
			'sinon': 'sinon/pkg/sinon',
			'chrome': 'chrome-stub'
		}
	},

	debug: true,
	target: 'web',
	devtool: 'cheap-module-eval-source-map',

	node: {
		__dirname: true
	},

	plugins: [
		new Webpack.optimize.OccurenceOrderPlugin(),
		new Webpack.HotModuleReplacementPlugin(),
		new Webpack.NoErrorsPlugin(),

		new Webpack.ProvidePlugin({
			'chrome': 'chrome-stub'
		}),

		new Webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify("development")
			}
		})
	],

	module: {
		noParse: [
			/sinon/
		],

		loaders: [
			{
				test: /\.(js|jsx)$/,
				loaders: ['babel'],
				include: [
					`${DIR_NAME}/views`,
					`${DIR_NAME}/config.js`
				]
			},

			{
				test: /sinon.*\.js$/,
				loader: 'imports?define=>false,require=>false'
			},

			{
				test   : /\.json/,
				loaders: ['json']
			},

			{
				test   : /\.css$/,
				loaders: ['style', 'css', 'postcss']
			},

			{
				test  : /\.(jpe?g|png|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
				loader: 'base64-inline-loader'
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