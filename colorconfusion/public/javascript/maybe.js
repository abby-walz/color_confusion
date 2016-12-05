// game.js
// Color Confusion

// global variables
var ans;
var score = 0;

// Fisher-Yates shuffle
// source: https://bost.ocks.org/mike/shuffle/


function shuffle(array) {
    document.getElementById("rules").style.display="none";
    var m = array.length, t, i;

  // While there remain elements to shuffle…
    while (m) {

    // Pick a remaining element…
        i = Math.floor(Math.random() * m);
        m = m - 1;

        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }

    return array;
}

function color_confusion() {

    var colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple", "White", "Black", "Gray"];
    
    // shuffle background color
    colors = shuffle(colors);
    document.getElementById("A").style.backgroundColor = colors[0];
     document.getElementById("B").style.backgroundColor = colors[1];
     document.getElementById("C").style.backgroundColor = colors[2];
     document.getElementById("D").style.backgroundColor = colors[3];
     document.getElementById("E").style.backgroundColor = colors[4];
     document.getElementById("F").style.backgroundColor = colors[5];
     document.getElementById("G").style.backgroundColor = colors[6];
     document.getElementById("H").style.backgroundColor = colors[7];
     document.getElementById("I").style.backgroundColor = colors[8];
    
    // shuffle the words
    colors = shuffle(colors);
     document.getElementById("wordA").innerHTML = colors[0];
     document.getElementById("wordB").innerHTML = colors[1];
     document.getElementById("wordC").innerHTML = colors[2];
     document.getElementById("wordD").innerHTML = colors[3];
     document.getElementById("wordE").innerHTML = colors[4];
     document.getElementById("wordF").innerHTML = colors[5];
     document.getElementById("wordG").innerHTML = colors[6];
     document.getElementById("wordH").innerHTML = colors[7];
     document.getElementById("wordI").innerHTML = colors[8];
    
    // Randomly pick one of one of the array elements  
    ans = Math.floor(Math.random() * 9);
    // Display what to look for
    document.getElementById("find").innerHTML = "Find: " + colors[ans];
    document.getElementById("restart").style.display = "none";
    document.getElementById("outer").style.display = "block";
    document.getElementById("find").style.display = "block";
    document.getElementById("scorepanel").style.display = "block";
}

// If they got it right
function correct() {
    score = score + 5;
    document.getElementById("score").innerHTML = score;
    color_confusion();
}

// If they got it wrong
function incorrect() {
    alert("Incorrect! You got a score of " + score + "!");
    document.getElementById("find").innerHTML = "You lose!";
    document.getElementById("restart").style.display="block";
    //document.getElementById("score").innerHTML = "0";
    score = 0;
}

// Check if they got it right or not

function checkA() { 
    if (ans == "0") {
        correct();
    }
    else {
        incorrect();
    }
}
function checkB() {
    if (ans == "1") {
      correct();
    }
    else {
        incorrect();
    }
}
function checkC() {
    if (ans == "2") {
      correct();
    }
    else {
        incorrect();
    }
}
function checkD() {
    if (ans == "3") {
      correct();
    }
    else {
        incorrect();
    }
}
function checkE() {
    if (ans == "4") {
      correct();
    }
    else {
        incorrect();
    }
}
function checkF() {
    if (ans == "5") {
      correct();
    }
    else {
        incorrect();
    }
}
function checkG() {
    if (ans == "6") {
      correct();
    }
    else {
        incorrect();
    }
}
function checkH() {
    if (ans == "7") {
      correct();
    }
    else {
        incorrect();
    }
}
function checkI() {
    if (ans == "8") {
       correct();
    }
    else {
        incorrect();
    }
}