export NODE_ENV=production;

# https://webpack.js.org/api/cli/

npm run webpack -- \
	--display-reasons \
	--optimize-minimize \
	--progress \
	--profile \
	--display-error-details \
	--config ./tasks/webpack/production.js && \
cat cache/stats.json | npm run analyzer;
