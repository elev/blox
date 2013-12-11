var canvas = document.getElementsByTagName('canvas')[0];
var context = canvas.getContext('2d');

var x = 50;
var y = 50;
var width = 50;
var height = 50;
var i = 0;
var timer;
context.fillRect(x, y, width, height);

// return where the mouse was clicked
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

// guages which direction to push the block 
// depending on where the mouse was clicked
function calculateMovement(mousePos){
	var squareCenterX = x + width/2;
	var squareCenterY = y + height/2;
	var d = 1;
	var mag = Math.sqrt(Math.pow(mousePos[0] - squareCenterX, 2)
			 + Math.pow(mousePos[1] - squareCenterY, 2));

	var P3x = d * (mousePos[0] - squareCenterX) / mag;
	var P3y = d * (mousePos[1] - squareCenterY) / mag;
	return [P3x, P3y];
}

// click the mouse, push the block
function move(event){
	var mousePos = trackMouse(event);
	var direction = calculateMovement(mousePos);
	// if the timer exists from a previous instance 
	// remove it! 
	if (typeof timer != undefined){
		clearInterval(timer);
		i = 0;
	}
	timer = setInterval(function(){
		// collision detection!
		direction[0] = (x + width >= canvas.width || x <= 0 ) ? direction[0] * -1 : direction[0];
		direction[1] = (y + height >= canvas.height || y <= 0 ) ? direction[1] * -1 : direction[1];

		// this literally moves the square
		x = x - direction[0];
		y = y - direction[1];
		i++;
		context.clearRect(0, 0, canvas.width, canvas.height);
		context.fillRect(x, y, width, height);
		if(i > 100){
			clearInterval(timer);
			i = 0;
		}
	}, 10);
};



canvas.addEventListener('click', move, false);