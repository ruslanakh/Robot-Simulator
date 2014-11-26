/**
* robot functions
*/

var common = require("../app/common");

module.exports = new function() {
	/* Private */
	var _facingPositions = ['north', 'west', 'south', 'east'];
	var _x = 0;
	var _y = 0;
	var _f = null;
	var _rangeX = common.range(0,5);
	var _rangeY = common.range(0,5);

	// return true of the robot is on the table, otherwise false
	var onTable = function() {
		if(_f === null) {
			return false;
		}

		return true;
	};

	/* Publicly accessible */
	// place the robot on the table
	this.position = function(setX, setY, setFacing) {
		var invalid = -1;
		var setX = parseInt(setX);
		var setY = parseInt(setY);



		// check that the coordinates are valid
		if(_rangeX.indexOf(setX) === invalid || _rangeY.indexOf(setY) === invalid) {
			console.log('Coordinates not in rage.')
			return;
		}

		// check that the facing direction is valid
		if(_facingPositions.indexOf(setFacing) === invalid) {
			console.log('Facing position incorrect');
			return;
		}

		_x = setX;
		_y = setY;
		_f = _facingPositions.indexOf(setFacing);
	};

	// move one step forward in the direction the robot is facing
	this.move = function() {
		var newX = _x;
		var newY = _y;
		var invalid = -1;

		if(!onTable()) {
			return;
		}

		// move in the direction the robot is facing
		switch(_facingPositions[_f]) {
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
		if(_rangeX.indexOf(newX) !== invalid && _rangeY.indexOf(newY) !== invalid) {
			_x = newX
			_y = newY
		}
	};

	// turn right
	this.right = function() {
		if(!onTable()) {
			return;
		}

		_f--;

		if(_f < 0) {
			_f = _facingPositions.length - 1;
		}
	};

	// turn left
	this.left = function() {

		if(!onTable()) {
			return;
		}

		_f++;

		if(_f > (_facingPositions.length - 1)) {
			_f = 0;
		}
	};

	// display current position
	this.report = function() {
		if(!onTable()) {
			return '';
		}

		return _x + ',' + _y + ',' + _facingPositions[_f];
	};
}