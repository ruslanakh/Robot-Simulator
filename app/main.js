/**
* This application simulates a robot moving on a table.
*/

console.log("** RoboT SimulatoR **");

var robot = require("../app/robot");

// run multiple commends
function processCommends(string) {
	var commendArray = string.trim().split("\n");

	for(var i = 0; i < commendArray.length; i++) {
		var commend = commendArray[i];
		var valueArray = commend.toLowerCase().split(' ');
		var action = valueArray.shift().trim();

		// tell robot what to do.
		switch (action) {
			case 'place':
				if(valueArray.length === 0) {
					return;
				}

				var setPosition = valueArray.shift().split(',');

				if(setPosition.length !== 3) {
					return;
				}

				robot.position(setPosition[0].trim(), setPosition[1].trim(), setPosition[2].trim());
				break;
			case 'move':

				robot.move();
				break;
			case 'left':
				robot.left();
				break;
			case 'right':
				robot.right();
				break;
			case 'report':
				result = robot.report();
				console.log(result);
		}
	}
}

// get third parameter
if(process.argv.length === 3) {
	var filename = process.argv[2];

	// read file
	var fs = require('fs')
	fs.readFile(filename, 'utf8', function(err, data) {
	 	if (err) throw err;
	  	processCommends(data);
	});
}