// The players block
function Pblock(x, y, width, height, dx, dy){
	Block.apply(this, arguments);
	this.draw = function(){
		context.fillStyle = 'blue';
		context.fillRect(this.x, this.y, 
		          			this.width, this.height);
	}
	var block = this;
	// player block changes direction on
	// mouse click
	this.changeDirection = function(event){
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
		var squareCenterX = block.x + block.width/2;
		var squareCenterY = block.y + block.height/2;
		var d = 1;

		var mag = Math.sqrt(Math.pow(mouseX - squareCenterX, 2)
			 + Math.pow(mouseY - squareCenterY, 2));

		block.dx = d * (mouseX - squareCenterX) / mag;
		block.dy = d * (mouseY - squareCenterY) / mag;
	}
}