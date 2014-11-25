/**
* Common function which are used in the app
*/

// This function will return number in array starting from num1 to num2
exports.range = function(num1, num2) {
	var result = [];

	if(num2 < num1) {
		return result;
	}

	// add number to an array
	for(var count = num1; count <= num2; count++) {
		result.push(count);
	}

	return result;
};