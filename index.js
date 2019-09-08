module.exports = (...obj) => {
	let max;
	if(obj.flat().length==0)
		return max
	if (Array.isArray(...obj)) {
		console.log('array')
		max = Math.max.apply(null, ...obj);
	}	else if (typeof obj === 'object' && Object.keys(...obj).length >= 1) {
		console.log('obj')
		max = Object.keys(...obj).reduce((a, b) => obj[a] > obj[b] ? a : b);
	}	else {
		console.log('else')
		max = Math.max(...obj);
	}

	return max;
};
