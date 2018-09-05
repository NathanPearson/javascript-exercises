function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (a) {
	if (!Array.isArray(a) || !a.length)
		return 0;
	return a.reduce(add);
}

function multiply (a) {
	return a.reduce((a,b)=> a*b);
}

function power(a, b) {
	let res = 0;
	for(i = 0; i <= b; i++) {
		res += a * a;
	}
	return res;
}

function factorial(a) {
	if(a < 0)
		return -1;
	else if (a == 0) 
		return 1;
	else { 
		return(a * factorial(a - 1));
	}	
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}