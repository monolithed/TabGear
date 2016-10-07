import locale from '../../_locales/en/messages.json';

chrome.i18n.getMessage = (key, positions = []) => {
	let { message } = locale[key];

	return message.replace(/\$(\d+)/g, (source, match) => {
		return  `${positions[match - 1]}` || source;
	});
};
