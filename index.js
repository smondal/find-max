module.exports = (...obj) => {
	let max;
	if (Array.isArray(...obj)) {
		max = Math.max.apply(null, ...obj);
	}	else {
		max = Math.max(...obj);
	}

	return max;
};
