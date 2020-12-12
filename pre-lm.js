const LM = require('ml-levenberg-marquardt');


function logistic([k, x0]) {
	return (x) => (1 / (1 + Math.exp(-(x-x0)/k)));
}

function fitLogistic(xs, ys, guess=[1,1]) {
	let data = {
		x: xs,
		y: ys
	};
	let options = {
		initialValues : guess,
		centralDifference : true
	};
	console.log(guess);
	return LM(data, logistic, options);
}

function helloPond() {
	console.log(LM);
}

module.exports = { helloPond: helloPond, fitLogistic: fitLogistic };