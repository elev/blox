// Helper functions for initializing the application

// Create enemy blocks based on 
// the enemy amount, give them random size
// and positioning.
function createEnemyBlocks(enemyBlockAmount){
	for (var i = 0; i < enemyBlockAmount; i++) {
		var posX = randomFromInterval(0, canvas.width);
		var posY = randomFromInterval(0, canvas.height);
		var heightWidth = randomFromInterval(0, 70);
		var iniDx = (Math.floor(Math.random()) == 0) ? Math.random() : Math.random() * -1;
		var iniDy = (Math.floor(Math.random()) == 0) ? Math.random() * -1 : Math.random();
		this.block = new AIblock(posX, posY, 
								heightWidth, heightWidth, 
								iniDx, iniDy);
	};
}

// create the players block
function createPlayer(){
	var player = new Pblock(50, 50, 50, 50);
	canvas.addEventListener('click', player.changeDirection);
}

// intialize the games main timer
function runGameInterval(initial){
	var k = 0;
	var j = 0;
	gameInterval = setInterval(function(){
		// set up ai intelligence... if its an ai...
		var aiMotionLength = Math.floor(Math.random() * 500);
		var mod = k%aiMotionLength;
		//
		clear(canvas, context);
		loop(canvas, context, blocksAll, mod);
		(initial === true) ? showIntroText(j) : '';
		k++;
		j = (j <= 100) ? j + 1 : j = 0;

	}, 10);
}

// intialize the game with a player, 
// this is ran on space bar click
function initGame(){
	blocksAll = [];
	clearInterval(gameInterval);
	createEnemyBlocks(enemyBlockAmount);
	createPlayer();
	runGameInterval(false);
}

// show the welcome text at start up
function showIntroText(j){
	context.font = '40pt arial';
	context.fillStyle = 'white';
	var maxWidth = 400;
	var textX = (canvas.width / 2) - (maxWidth / 2);
	context.fillText('Welcome To Blox', textX, 200, maxWidth);
	context.font = '20pt arial';
	if (j < 50 ){
			context.fillText('Press spacebar to begin.', textX + 50, 300, maxWidth);
		}
}
// 