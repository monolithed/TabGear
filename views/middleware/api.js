let data = [
	{
		title: 'Google Maps',
		url: 'https://maps.google.com',
		icon: 'https://www.google.com/images/branding/product/ico/maps_32dp.ico',
		id: 0,
		active: false
	},

	{
		title: 'Google Chrome',
		url: 'https://google.com',
		icon: 'https://www.google.com/images/icons/product/chrome-32.png',
		id: 1,
		active: false
	}
];

export default store => next => action => {
	next({
		type: 0,
		data,
		fail: 'Failed to load data'
	});
};
