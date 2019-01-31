// 1 - Rover Object Goes Here
// ======================

var rover = {
	direction: 'N',
  position: [0, 0],
  //position: [8, 8],
  travelLog: []
};

console.log('Direção: ' + rover.direction);
console.log('Posição: ' + rover.position);
console.log(rover);
// ======================

function coord(x, y) {
	var matrix = [];
	for (var i = 0; i < x; i++) {
		matrix[i] = new Array(y);
	}
	return matrix;
}

var myGrid = coord(10, 10);


// 2 - Virando o Rover
// ======================

function turnLeft() {
	console.log('turnLeft was called! ' + rover.direction);
	switch (rover.direction) {
		case 'N':
			rover.direction = 'W';
			break;
		case 'W':
			rover.direction = 'S';
			break;
		case 'S':
			rover.direction = 'E';
			break;
		case 'E':
			rover.direction = 'N';
			break;
	}
}

function turnRight() {
	console.log('turnRight was called! ' + rover.direction);
	switch (rover.direction) {
		case 'N':
			rover.direction = 'E';
			break;
		case 'E':
			rover.direction = 'S';
			break;
		case 'S':
			rover.direction = 'W';
			break;
		case 'W':
			rover.direction = 'N';
			break;
	}
}

function turning() {
	switch (turn) {
		case 'esquerda':
			turnLeft();
			break;
		case 'direita':
			turnRight();
			break;
	}
	movVira();
}

// 3 - Movimentando o Rover
// ========Para Frente==============

function moveForward() {
	console.log('moveForward was called ' + rover.position);
	switch (rover.direction) {
		case 'N':
			rover.position[0] = rover.position[0] - 1;
			break;
		case 'E':
			rover.position[1] = rover.position[1] + 1;
			break;
		case 'S':
			rover.position[0] = rover.position[0] + 1;
			break;
		case 'W':
			rover.position[1] = rover.position[1] - 1;
			break;
	}
	margem('para frente');
}

// ========Para Tras==============

function moveBackwards() {
	console.log('moveBackwards was called ' + rover.position);
	switch (rover.direction) {
		case 'N':
			rover.position[0] = rover.position[0] + 1;
			break;
		case 'E':
			rover.position[1] = rover.position[1] - 1;
			break;
		case 'S':
			rover.position[0] = rover.position[0] - 1;
			break;
		case 'W':
			rover.position[1] = rover.position[1] + 1;
			break;
	}
	margem('para tras');
}

// ======================
function margem(movement) {
	if (rover.position[0] < 0 || rover.position[0] >= 10) {
		console.log('Fora do mapa ' + movement);
		rover.position[0] = 0;
	}
	if (rover.position[1] < 0) {
		console.log('Fora do mapa ' + movement);
		rover.position[1] = 0;
	} else {
		movFrente();
	}
}

// 4 - Comandos
// ======================

function commands(command) {
	for (var i = 0; i < command.length; i++) {
		switch (command[i]) {
			case 'b':
				moveBackwards();
				break;
			case 'f':
				moveForward();
				break;
			case 'r':
				turn = 'direita ';
				turning();
				break;
			case 'l':
				turn = 'esquerda ';
				turning();
				break;
		}
	}
}

commands('fffffffllrffffbbb');
//commands('rffrfflfrff');

// 5 - Localizacao
//======================

function movFrente() {
	rover.travelLog.push(
		'Rover andou a: ' + rover.position
	);
}

function movVira() {
	rover.travelLog.push(
		'Rover virou a: ' +
			turn +
			rover.direction
	);
}

console.log(rover.travelLog);



