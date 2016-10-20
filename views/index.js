'use strict';

if (process.env.NODE_ENV == 'production') {
	require('./render/index.production.js');
}
else {
	require('./render/index.development.js');
}
