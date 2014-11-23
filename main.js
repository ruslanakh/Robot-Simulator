/**
* This application simulates a robot moving on a table.
*/

// this array defines the turning positions in order taken
var facingPositions = ['north', 'west', 'south', 'east'];

var x = 0;
var y = 0;
var f = null;

var rangeX = range(0, 5);
var rangeY = range(0, 5);

// place the robot on the table
function position(setX, setY, setFacing) {
	var invalid = -1;
	var setX = parseInt(setX);
	var setY = parseInt(setY);

	// check that the coordinates are valid
	if(rangeX.indexOf(setX) === invalid || rangeY.indexOf(setY) === invalid) {
		console.log('Coordinates not in rage.')
		return;
	}

	// check that the facing direction is valid
	if(facingPositions.indexOf(setFacing) === invalid) {
		console.log('Facing position incorrect');
		return;
	}

	x = setX;
	y = setY;
	f = facingPositions.indexOf(setFacing);
}

// move one step forward in the direction the robot is facing
function move() {
	var newX = x;
	var newY = y;
	var invalid = -1;

	if(!onTable()) {
		return;
	}

	// move in the direction the robot is facing
	switch(facingPositions[f]) {
		case 'north':
			newY++;
			break;
		case 'south':
			newY--;
			break;
		case 'east':
			newX++;
			break;
		case 'west':
			newX--;
	}

	// check that the new coordinates are in range
	if(rangeX.indexOf(newX) !== invalid && rangeY.indexOf(newY) !== invalid) {
		x = newX
		y = newY
	} else {
		console.log('Cannot move off the table');
	}
}

// turn right
function right() {
	if(!onTable()) {
		return;
	}

	f--;

	if(f < 0) {
		f = facingPositions.length - 1;
	}
}

// turn left
function left() {

	if(!onTable()) {
		return;
	}

	f++;

	if(f > (facingPositions.length - 1)) {
		f = 0;
	}
}

// display current position
function report() {
	if(!onTable()) {
		return '';
	}

	return x + ',' + y + ',' + facingPositions[f];
}

// return an array of numbers between num1 & num2
function range(num1, num2) {
	var result = [];

	if(num2 < num1) {
		return result;
	}

	// add number to an array
	for(var count = num1; count <= num2; count++) {
		result.push(count);
	}

	return result;
}

// return true of the robot is on the table, otherwise false
function onTable() {
	if(f === null) {
		return false;
	}

	return true;
}

// tell the robot what to do
function commend(string) {
	var valueArray = string.toLowerCase().split(' ');
	var action = valueArray.shift();

	// checks if action is place, move left, right or report
	switch (action) {
		case 'place':
			if(valueArray.length === 0) {
				return;
			}

			var setPosition = valueArray.shift().split(',');

			if(setPosition.length !== 3) {
				return;
			}

			position(setPosition[0].trim(), setPosition[1].trim(), setPosition[2].trim());
			break;
		case 'move':
			move();
			break;
		case 'left':
			left();
			break;
		case 'right':
			right();
			break;
		case 'report':
			var result = report() + "<br />";
			$('.output').append(result);
	}
}

// run multiple commends
function multiCommend(string) {
	var commendArray = string.trim().split("\n");

	$.each(commendArray, function(id, value) {
		commend(value);
	});
}

$(document).ready(function() {
	$('#runTest').on('click', function() {
		testBoundaries();
	});

	$('#runUserInput').on('click', function() {
		var userInput = $('#userInput').val();
		multiCommend(userInput);
	});

	$('#clear').on('click', function() {
		$('.output').html('');
	});
});