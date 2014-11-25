/**
* robot functions
*/

var common = require("../app/common");

module.exports = {
	facingPositions: ['north', 'west', 'south', 'east'],
	x: 0,
	y: 0,
	f: null,
	rangeX: common.range(0,5),
	rangeY: common.range(0,5),

	// place the robot on the table
	position: function(setX, setY, setFacing) {
		var invalid = -1;
		var setX = parseInt(setX);
		var setY = parseInt(setY);

		// check that the coordinates are valid
		if(this.rangeX.indexOf(setX) === invalid || this.rangeY.indexOf(setY) === invalid) {
			console.log('Coordinates not in rage.')
			return;
		}

		// check that the facing direction is valid
		if(this.facingPositions.indexOf(setFacing) === invalid) {
			console.log('Facing position incorrect');
			return;
		}

		this.x = setX;
		this.y = setY;
		this.f = this.facingPositions.indexOf(setFacing);
	},

	// move one step forward in the direction the robot is facing
	move: function() {
		var newX = this.x;
		var newY = this.y;
		var invalid = -1;

		if(!this.onTable()) {
			return;
		}

		// move in the direction the robot is facing
		switch(this.facingPositions[this.f]) {
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
		if(this.rangeX.indexOf(newX) !== invalid && this.rangeY.indexOf(newY) !== invalid) {
			this.x = newX
			this.y = newY
		}
	},

	// turn right
	right: function() {
		if(!this.onTable()) {
			return;
		}

		this.f--;

		if(this.f < 0) {
			this.f = this.facingPositions.length - 1;
		}
	},

	// turn left
	left: function() {

		if(!this.onTable()) {
			return;
		}

		this.f++;

		if(this.f > (this.facingPositions.length - 1)) {
			this.f = 0;
		}
	},

	// display current position
	report: function() {
		if(!this.onTable()) {
			return '';
		}

		return this.x + ',' + this.y + ',' + this.facingPositions[this.f];
	},

	// return true of the robot is on the table, otherwise false
	onTable: function() {
		if(this.f === null) {
			return false;
		}

		return true;
	},

	// tell the robot what to do
	commend: function(string) {
		var valueArray = string.toLowerCase().split(' ');
		var action = valueArray.shift().trim();
		var result = null;

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

				this.position(setPosition[0].trim(), setPosition[1].trim(), setPosition[2].trim());
				break;
			case 'move':

				this.move();
				break;
			case 'left':
				this.left();
				break;
			case 'right':
				this.right();
				break;
			case 'report':
				result = this.report();
		}

		return result;
	}
}