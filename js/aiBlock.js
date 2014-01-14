// inherits from Block
function AIblock(x, y, width, height, dx, dy){
	Block.apply(this, arguments);
	this.incrementer = 0;
	this.aiMotionLength = Math.floor(Math.random() * 500);
	// generate random directions.
	this.changeDirection = function(){
		var xRand = Math.round(Math.random());
		var yRand = Math.round(Math.random());
		this.dx = (xRand === 0) ? -1 * Math.random() : Math.random();
		this.dy = (yRand === 0) ? -1 * Math.random() : Math.random();
		this.incrementer = 0;
		this.aiMotionLength = Math.floor(Math.random() * 500);
	}
	// modifing the parents tick method
	// so the ai can change direction randomly...
	this.tick = function(){
		this.width <= 0 ? this.destruct(blocksAll) : false;
		this.wallCollide();
		this.x -= this.dx;
		this.y -= this.dy;
		this.collision(blocksAll);
		this.draw();
		this.incrementer++;
		(this.incrementer >= this.aiMotionLength) ? this.changeDirection() : '';
	}
}