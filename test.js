/**
* This file tests the boundaries of the table
* 
*/

// test north boundary
function moveOffTableNorth() {
	commend('PLACE 2,2,NORTH');

	for(var w=0; w < 4; w++) {
		commend('move');
	}

	commend('report');
}

// test south boundary
function moveOffTableSouth() {
	commend('place 2,2,north');

	commend('left');
	commend('left');

	for (var w=0; w < 4; w++) {
		commend('move');	
	}

	commend('report');
}

// test east boundary
function moveOffTableEast() {
	commend('place 2,2,north');

	commend('right');

	for (var w=0; w < 4; w++) {
		commend('move');	
	}

	commend('report');
}

// test west boundary
function moveOffTableWest() {
	commend('place 2,2,north');

	commend('left');

	for (var w=0; w < 4; w++) {
		commend('move');	
	}

	commend('report');
}

// run all of the above
function testBoundaries() {
	moveOffTableNorth();
	moveOffTableSouth();
	moveOffTableEast();
	moveOffTableWest();
}