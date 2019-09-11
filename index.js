/* eslint no-extend-native: ["error", { "exceptions": ["Array"] }] */
const flatten = function (arr) {
	return arr.reduce((flat, toFlatten) => {
		return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
	}, []);
};

module.exports = (...obj) => {
	let max;

	if (flatten(obj).length === 0) {
		return max;
	}

	if (Array.isArray(...obj)) {
		const newarr = flatten(...obj);
		max = Math.max.apply(null, newarr);
	}	else if (typeof obj === 'object' && Object.keys(...obj).length >= 1) {
		max = Object.keys(...obj).reduce((a, b) => obj[a] > obj[b] ? a : b);
	}	else {
		max = Math.max(...obj);
	}

	return max;
};
