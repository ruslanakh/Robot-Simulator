/**
* Test the boundaries by trying to move the robot off the table
* The robot should move to the eage of the table and not any more.
*/

var robot = require("../app/robot");


describe('testBoundaries', function(){
	var x = 0;
	var y = 1;
	var f = 2;

	it('North boundary', function(done) {
	  	robot.commend('place 2,2,north');

	  	// 4 steps forward
		for(var n=0; n < 4; n++) {
			robot.commend('move');
		}

		var result = robot.commend('report');
		var location = result.split(',');

		// check the results
		if(location[x] !== '2' || location[y] !== '5' || location[f] !== 'north') {
			throw 'Result is incorrect. Report: ' + result;
		}

	  	done();
	});

	it('South boundary', function(done) {
		robot.commend('place 2,2,north');

		robot.commend('left');
		robot.commend('left');

		// 4 steps forward
		for(var w=0; w < 4; w++) {
			robot.commend('move');
		}

		var result = robot.commend('report');
		var location = result.split(',');

		if(location[x] !== '2' || location[y] !== '0' || location[f] !== 'south') {
			console.log(result);
			throw 'Result is incorrect. Report: ' + result;
		}

		done();
	});

	it('East boundary', function(done) {
		robot.commend('place 2,2,north');

		robot.commend('right');

		// 4 steps forward
		for(var w=0; w < 4; w++) {
			robot.commend('move');
		}

		var result = robot.commend('report');
		var location = result.split(',');

		if(location[x] !== '5' || location[y] !== '2' || location[f] !== 'east') {
			throw 'Result is incorrect. Report: ' + result;
		}

		done();
	});

	it('West boundary', function(done) {
		robot.commend('place 2,2,north');

		robot.commend('left');

		// 4 steps forward
		for(var w=0; w < 4; w++) {
			robot.commend('move');
		}

		var result = robot.commend('report');
		var location = result.split(',');

		if(location[x] !== '0' || location[y] !== '2' || location[f] !== 'west') {
			throw 'Result is incorrect. Report: ' + result;
		}

		done();
	});
})