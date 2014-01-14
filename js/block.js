// Top Level Block, used as an abstract class to be inherited.
function Block(x, y, width, height, dx, dy){
	this.x = x || 0;
	this.y = y || 0;
	this.width = width || 0;
	this.height = height || 0;
	this.dx = dx || 0;
	this.dy = dy || 0;

	this.draw = function(){
		context.fillStyle = 'red';
		context.fillRect(this.x, this.y, 
						this.width, this.height);
	}
	// remove from the array which tracks all active blocks
	this.destruct = function(blocksAll){
		for(var i = 0; i < blocksAll.length; i++) {
			if(this === blocksAll[i]) {
				blocksAll.splice(i, 1);
			}
		}
	}
	//
	// check if block is colliding against wall.
	this.wallCollide = function(){
		if (this.x + this.width >= canvas.width && this.dx < 0 ||
			this.x <= 0 && this.dx > 0){
			this.dx = this.dx * -1;
		}
		if (this.y + this.height >= canvas.height && this.dy < 0 ||
			this.y <= 0 && this.dy > 0){
			this.dy = this.dy * -1;
		}
	}
	//
	// function to change direction,
	// used in an abstract sort of way
	// since children will have different implementations of it.
	this.changeDirection = function(){
		// abstract method.
	}
	// if this block has collided with another block
	// change the width and height parameters
	this.collision = function(blocksAll){
		for (var i = 0; i < blocksAll.length; i++) {
			if (blocksAll[i] !== this){
				if(isCollide(this, blocksAll[i])){
					if(this.width < blocksAll[i].width){
						this.width -= 2;
						this.height -= 2;
					}else if(this.width > blocksAll[i].width){
						this.width += 2;
						this.height += 2;
					}
				}
			}
		};
	}
	//
	// works with the main application loop
	this.tick = function(){
		this.width <= 0 ? this.destruct(blocksAll) : false;
		this.wallCollide();
		this.x -= this.dx;
		this.y -= this.dy;
		this.collision(blocksAll);
		this.draw();
	}
	//
	// add block to blocksAll array
	blocksAll.push(this);
}
//
