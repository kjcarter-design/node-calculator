let ss = require('simple-statistics');

function smallest(arr) {
	const smallestNum = ss.min(arr);
	return smallestNum;
}
function largest(arr) {
	const largestNum = ss.max(arr);
	return largestNum;
}
function sum(arr) {
	const sumOfNums = ss.sum(arr);
	return sumOfNums;
}
function mean(arr) {
	const meanOfNums = ss.mean(arr);
	return meanOfNums;
}

module.exports = {
	smallest,
	largest,
	sum,
	mean,
};
