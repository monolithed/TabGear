import tabs from './tabs';
import locale from '../_locales/ru/messages.json';

chrome.i18n._locales = locale;

let methods = [
	'query',
	'remove',
	'create',
	'discard',
	'highlight'
];

for (let method of methods) {
	chrome.tabs[method].yields(tabs);
}
