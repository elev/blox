// helper functions
	
// check if two blocks have collided.
function isCollide(a, b) {
	return !(
		((a.y + a.height) < (b.y)) || 
		(a.y > (b.y + b.height)) ||
		((a.x + a.width) < b.x) || (
		a.x > (b.x + b.width))
	);
}

// clears the canvas
function clear(canvas, context){
	context.clearRect(0, 0, canvas.width, canvas.height);
}

// generate a random number between 2 numbers
function randomFromInterval(from,to){
	return Math.floor(Math.random()*(to-from+1)+from);
}



// generate a random number between 2 numbers
function randomFromInterval(from,to){
	return Math.floor(Math.random()*(to-from+1)+from);
}

// clear canvas run each blocks tick function.
function loop(canvas, context, blocks, mod){
	for( var i=0; i<blocks.length; i++){
		blocks[i].tick();
	}
}
//