let path = require('path');

let Webpack = require('webpack');
let PostCSSImport = require('postcss-import');
let PreCSS = require('precss');
let Autoprefixer = require('autoprefixer');
let UnusedFilesWebpackPlugin = require('unused-files-webpack-plugin').default;
let StatsPlugin = require('stats-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');
var VisualizerPlugin = require('webpack-visualizer-plugin');
let ESLintFriendlyFormatter = require('eslint-friendly-formatter');
let findCacheDir = require('find-cache-dir');

const DIR_NAME = path.join(__dirname, '../../');

module.exports = {
	entry: [
		'./views/index.js',
		'./config.js'
	],

	output: {
		path: `${DIR_NAME}/cache`,
		filename: '[name].js'
	},

	resolve: {
		extensions: ['', '.js', '.jsx', '.png']
	},

	devtool: 'source-map',
	target : 'web',

	/*
	externals: {
		'react/addons': true,
		'react/lib/ExecutionEnvironment': true,
		'react/lib/ReactContext': true
	},
	*/

	node: {
		__dirname: true,

		// Some libraries import Node modules but don't use them in the browser.
		// Tell Webpack to provide empty mocks for them so importing them works.
		fs : 'empty',
		net: 'empty',
		tls: 'empty'
	},

	plugins: [
		new CleanWebpackPlugin(['./cache']),
		new Webpack.optimize.OccurenceOrderPlugin(),
		new Webpack.optimize.DedupePlugin(),

		new ExtractTextPlugin('[name].css', {
			allChunks: true
		}),

		new OptimizeCssAssetsPlugin(),

		new Webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production')
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

		new Webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings : false,
				screw_ie8: true
			},

			minimize: true,
			comments: true
		}),

		new StatsPlugin('./stats.json', {
			chunkModules: true,
			exclude: [ ]
		}),

		new VisualizerPlugin()
	],

	module: {
		preLoaders: [
			{
				test: /\.(js|jsx)$/,
				loader: 'eslint-loader',
				exclude: /node_modules/
			}
		],

		loaders: [
			{
				test: /\.(js|jsx)$/,
				loader: 'babel-loader',
				include: [
					`${DIR_NAME}/views`,
					`${DIR_NAME}/config.js`
				],
				query: {
					cacheDirectory: findCacheDir({
						name: 'babel'
					})
				}
			},

			{
				test: /\.json/,
				loader: 'json'
			},

			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract(
					'style', 'css?importLoaders=1&-autoprefixer!postcss')
			},

			{
				test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
				loader: 'base64-inline-loader'
			}
		]
	},

	postcss (Webpack) {
		return [
			PreCSS,

			Autoprefixer({
				browsers: [
					'>1%',
					'last 4 versions',
					'not ie < 9'
				]
			}),

			PostCSSImport({
				addDependencyTo: Webpack
			})
		];
	},

	eslint: {
		formatter: ESLintFriendlyFormatter,
		fix: true,
		cache: true
	}
};
