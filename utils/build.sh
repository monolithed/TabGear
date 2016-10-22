options='--display-reasons --optimize-minimize --progress --profile --display-error-details --config ./tasks/client.js'

export NODE_ENV=production;

case "$*" in
	(*--stat*)
		npm run webpack -- $options --json | webpack-bundle-size-analyzer
	;;

	*)
		npm run webpack -- $options
	;;
esac
