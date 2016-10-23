module.exports = config => {
	config.set({
		reporters: [
			'progress'
		],

		browsers : [
			'PhantomJS'
		],

		port: 9876,
		colors: true,
		logLevel : config.LOG_INFO,
		autoWatch: false,
		singleRun: false,

		basePath: '',

		frameworks: [
			'browserify',
			'mocha'
		],

		files: [
			'../../tests/**/*.js'
		],

		preprocessors: {
			'../../{views,tests}/**/*.js' : [
				'babel',
				'browserify'
			],
		},

		babelPreprocessor: {
			options: {
				presets: [
					'airbnb'
				]
			}
		},

		browserify: {
			debug: true,

			transform: [
				[
					'babelify', {
						presets: [
							'airbnb'
						]
					}
				]
			],

			configure (bundle) {
				bundle.on('prebundle', () => {
					bundle.external('react/lib/ReactContext');
					bundle.external('react/lib/ExecutionEnvironment');
				});
			}
		}
	})
};
