/* eslint no-extend-native: ["error", { "exceptions": ["Array"] }] */
Array.prototype.flat = function () {
	return [].concat(...this);
};

module.exports = (...obj) => {
	let max;
	if (obj.flat().length === 0) {
		return max;
	}

	if (Array.isArray(...obj)) {
		max = Math.max.apply(null, ...obj);
	}	else if (typeof obj === 'object' && Object.keys(...obj).length >= 1) {
		max = Object.keys(...obj).reduce((a, b) => obj[a] > obj[b] ? a : b);
	}	else {
		max = Math.max(...obj);
	}

	return max;
};
