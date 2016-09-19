let path = require('path');

let Webpack = require('webpack'),
	Express = require('express'),
	WebpackDevMiddleware = require('webpack-dev-middleware'),
	WebpackHotMiddleware = require('webpack-hot-middleware');

let config = require('../build/debug');

let express = new Express,
	webpack = new Webpack(config);

let middleware = new WebpackDevMiddleware(webpack, {
	noInfo: true,
	publicPath: config.output.publicPath
});

express.use(middleware);

middleware = new WebpackHotMiddleware(webpack);

express.use(middleware);

express.use(function (request, result) {
	let file = path.join(__dirname, '../views/index.html');

	result.sendFile(file);
});

const port = 3000;

express.listen(port, function (error) {
	if (error) {
		console.error(error);
	}
	else {
		console.info('==> 🌎  Listening on port %s. Open up ' +
			'http://localhost:%s in your browser.', port, port);
	}
});
