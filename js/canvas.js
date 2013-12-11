var canvas = document.getElementsByTagName('canvas')[0];
var context = canvas.getContext('2d');

var x = 50;
var y = 50;
var width = 50;
var height = 50;
var i = 0;
context.fillRect(x, y, width, height);

function trackMouse(event){
	var mouseX = new Number();
	var mouseY = new Number();
	if (event.x != undefined && event.y != undefined){
		mouseX = event.x;
		mouseY = event.y;
	}else{
		mouseX = event.clientX + document.body.scrollLeft +
				document.documentElement.scrollLeft;
		mouseY = event.clientY + document.body.scrollTop +
				document.documentElement.scrollTop;
	}

	mouseX -= canvas.offsetLeft;
	mouseY -= canvas.offsetTop;
	return [mouseX, mouseY];
}

function calculateMovement(mousePos){
	var dx = mousePos[0] - x;
	var dy = mousePos[1] - y;
// 	var radians = Math.atan2(dy, dx)
// 	//var direction = radians / Math.PI * 180;
// 	var ang = radians * 180 / Math.PI;
// //	alert(radians);
// 	// var vX = Math.cos(radians);
// 	// var vY = Math.sin(radians);
// 	alert(ang);
// 	var vX = Math.cos(ang);
// 	var vY = Math.sin(ang);
// 	// alert("x: " + vX + ' y: ' + vY );
	//var x2 = 1;

	// notes, the square is being gaged bu the upper left corner
	// I think the p3x p2x is working
	// using those I need to add or subtract to where x and y go...
	var d = 10;
	var mag = Math.sqrt(Math.pow(mousePos[0] - x, 2) + Math.pow(mousePos[1] - y, 2));
	console.log('mouse :  ' + mousePos);
	console.log('square: ' + x + ' y: ' + y);
	var P3x = mousePos[0] + d * (mousePos[0] - x) / mag;
	var P3y = mousePos[1] + d * (mousePos[1] - y) / mag;
//	var y2 = dy/dx;
	console.log('new ' + P3x + ', ' + P3y);
	return [P3x, P3y];
}

function move(event){
	var mousePos = trackMouse(event);
	calculateMovement(mousePos);
	var y2 = 1;
	var timer = setInterval(function(){
	x = x + 1;
	y = y + y2;
	i++;
	// console.log("x =" + x + "y =" + y);
	context.clearRect(0, 0, canvas.width, canvas.height);
	context.fillRect(x, y, width, height);
	if(i > 50){
		clearInterval(timer);
		i = 0;
	}
	}, 10);
};



canvas.addEventListener('click', move, false);