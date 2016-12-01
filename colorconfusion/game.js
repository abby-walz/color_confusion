// game.js
// Color Confusion

// algorithm
// get length and width of the canvas
// initialize score, number of Cicles, answer, color array 
// while answer is true
	// draw number of circles based on score
	// randomly choose correct word or color 
	// fill in colors from array in random circles
	// write matching color names in random circles
	// remember which is correct
	// wait for players choice
	// update answer (true or false)  
	
// fuctions to find or make
// draw circles (int n, int length, int width) 
	// divide up canvis for n circles
	// IDK how to deal with odd number 
	// calculate parameters for circle 
	// draw circles 
// write words (int n, int length, int width) 
	// IDK how to make sure the words are the right size in the circle 
	//
// randomly make answer (char type) 
	// randomly choose a circle 

function color_confusion() {
	// get canvas HTML element 
	var canvas = document.getElementById('canvas');
	var width = canvas.width;
	var height = canvas.height;
	var context = canvas.getContext('2d');
	var score = 0;
	var answer = 1;
	var numCircles = 1;
	
	while (answer) {
		// ellipse(x, y, w, h) 
		var cWidth;
		var cHeight;
		var x;
		var y;
		var c1 = [0, 0, 0, 0];
		var c2 = [0, 0, 0, 0];
		var c3 = [0, 0, 0, 0];
		var c4 = [0, 0, 0, 0];
		var c5 = [0, 0, 0, 0];
		var c6 = [0, 0, 0, 0];
		var c7 = [0, 0, 0, 0];
		switch(numCircles) {
			case 1:
				c1 = [width/2, height/2, w - w/10, w- w/10];
				break;
			case 2:
				c1 = [width/4, height/2, width/2- w/10, width/2- w/10];
				c2 = [3*width/4, height/2, width/2- w/10, width/2- w/10];
				break;
			case 3:
				c1 = [width/4, height/4, width/2- w/10, width/2- w/10];
				c2 = [3*width/4, height/4, width/2- w/10, width/2- w/10];
				c3 = [width/4, 3*height/4, width/2- w/10, height/2- w/10];
			case 4:
				c1 = [width/4, height/4, width/2- w/10, width/2- w/10];
				c2 = [3*width/4, height/4, width/2- w/10, width/2- w/10];
				c3 = [width/4, 3*height/4, width/2- w/10, height/2- w/10];
				c4 = [3*width/4, 3*height/4- w/10, width/2, height/2- w/10];
			case 5:
			case 6:
			case 7:
			default:
				// 1 circle 
				c1 = [width/2, height/2, w - w/10, w- w/10];
		}
	}
	
	window.alert("Score: " + score);
	
}
