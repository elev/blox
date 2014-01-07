var canvas = document.getElementsByTagName('canvas')[0];
var context = canvas.getContext('2d');

/*
* Deletes and redraws the canvas element
* @param {array} blocks to delete and redraw 
*
*/

function draw(blocks){
	var k = 0;
	var timer = setInterval(function(){

		context.clearRect(0, 0, canvas.width, canvas.height);
		// loop through array of blocks and draw them to the canvas
		for (var i=0; i < blocks.length; i++ ){
			console.log('loop' + blocks[i].x);
			//console.log(blocks[i]);
			context.fillRect(blocks[i].x, blocks[i].y, blocks[i].width, blocks[i].height);
		}
		if (k > 10) {
			clearInterval(timer);
			debugger;
		}else{
			//console.log(k);
			k ++;
		}
	}, 100);

}