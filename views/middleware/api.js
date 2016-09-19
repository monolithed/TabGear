export default store => next => action => {
	next({ type: 0 });
};
