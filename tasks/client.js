let path = require('path');

let Webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let PreCSS = require('precss');
let PostCSSImport = require('postcss-import');
let Autoprefixer = require('autoprefixer');
let UnusedFilesWebpackPlugin = require("unused-files-webpack-plugin").default;
let StatsPlugin = require('stats-webpack-plugin');

const DIR_NAME = path.join(__dirname, '..');

module.exports = {
	entry: [
		'./views/index.js',
		'./config.js'
	],

	output: {
		path: `${DIR_NAME}/cache`,
		filename: 'build.js',
	},

	resolve: {
		extensions: ['', '.js', '.jsx', '.png']
	},

	// devtool: 'source-map',
	target : 'web',

	plugins: [
		new Webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify("production")
			}
		}),

		new UnusedFilesWebpackPlugin({
			globOptions: {
				ignore: [
					'./**/*',
					'*.{md,html,json}',
					'{_locales,node_modules,cache,debug,files,tasks}/**/*'
				]
			}
		}),

		new Webpack.optimize.OccurenceOrderPlugin(),
		new Webpack.optimize.DedupePlugin(),

		new Webpack.optimize.UglifyJsPlugin({
			compressor: {
				warnings: false
			}
		}),

		new StatsPlugin('./stats.json', {
			chunkModules: true,
			exclude     : [ ]
		})
	],

	module: {
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
				test   : /\.css$/,
				loaders: ['style', 'css', 'postcss']
			},

			{
				test   : /\.(jpe?g|png|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
				loader: 'base64-inline-loader'
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
