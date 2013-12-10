var canvas = document.getElementsByTagName('canvas')[0];
var context = canvas.getContext('2d');

var x = 100;
var y = 100;
var width = 100;
var height = 100;
context.fillRect(x, y, width, height);

function move(){
	var timer = setInterval(function(){
	x++;
	y++;
	context.clearRect(0, 0, canvas.width, canvas.height);
	context.fillRect(x, y, width, height);
	if(y > 150){
		clearInterval(timer);
	}
	}, 30);
};



canvas.addEventListener('click', move);