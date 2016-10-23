if (process.env.NODE_ENV === 'production') {
	require('./render/production.js');
}
else {
	require('./render/development.js');
}
