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
		switch(numCircles) {
			case 1:
				cWidth = width;
				cHeight = height;
				var c1 = {
					x = width / 2;
					y = x;
					w = width;
					h = height;
				}
				break;
			case 2:
				var c2 = {
					x = width / 4;
					y = height / 2;
					w = width / 2;
					h = w;
				}
				c1.x += c2.x;
				
				break;
			case 3:
			case 4:
			case 5:
			case 6:
			case 7:
			default:
				// 1 circle 
				cHeight = height;
				cWidth = width;
		}
	}
	
	window.alert("Score: " + score);
	
}
