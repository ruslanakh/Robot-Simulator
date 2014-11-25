/**
* This application simulates a robot moving on a table.
*/

console.log("** RoboT SimulatoR **");

var robot = require("../app/robot");

// run multiple commends
function processCommends(string) {
	var commendArray = string.trim().split("\n");

	for(var i = 0; i < commendArray.length; i++) {
		var result = robot.commend(commendArray[i]);

		// return result for report commend
		if (result !== null) {
			console.log(result);
		}
	}
}

if(process.argv.length === 3) {
	var filename = process.argv[2];

	// read file
	var fs = require('fs')
	fs.readFile(filename, 'utf8', function(err, data) {
	 	if (err) throw err;
	  	processCommends(data);
	});
}