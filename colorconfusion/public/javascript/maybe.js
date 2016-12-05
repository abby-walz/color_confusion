// game.js
// Color Confusion

// Fisher-Yates shuffle
// source: https://bost.ocks.org/mike/shuffle/
function shuffle(array) {
    var m = array.length, t, i;

  // While there remain elements to shuffle…
    while (m) {

    // Pick a remaining element…
        i = Math.floor(Math.random() * (m - 1));

        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }

    return array;
}

function color_confusion() {
	// shuffle word array
    // shuffle color array
    // change A-G colors
    // change wordA-wordG
    // chose a random number between 0-6
    // use to know witch is the right answer
    // right answer: add points loop
    // wrong answer: game over
	
    var jumbo = [document.getElementById("A"),  document.getElementById("B"), 
                document.getElementById("C"),
                document.getElementById("D"),
                 document.getElementById("E"),
                 document.getElementById("F"),
                 document.getElementById("G"),
                 document.getElementById("H"),
                 document.getElementById("I")];
    var words = [document.getElementById("wordA"),
                 document.getElementById("wordB"),
                 document.getElementById("wordC"),
                 document.getElementById("wordD"),
                 document.getElementById("wordE"),
                 document.getElementById("wordF"),
                 document.getElementById("wordG"),
                 document.getElementById("wordH"),
                 document.getElementById("wordI")];
    var colors = ["red", "orange", "yellow", "green", "blue", "purple", "white", "black", "gray", "saddlebrown"];
    var i;
    
    // shuffle background color
    
    colors = shuffle(colors);
    
    words[0].textContent = "Hello World";
    
    for (i = 0; i < 9; i + 1) {
        jumbo[i].style.background = colors[i];
    }
}