// game.js
// Color Confusion

/*

var color_possibilities;

color_possibilities["indigo"] = "#FFFFFF"


*/

var score = 0;
var colorArray = ["red", "orange", "yellow", "green", "blue", "purple", "white", "black", "gray", "saddlebrown"];
var answer;
//var circleID = ["11", "22", "33", "44", "55", "66", "77", "88", "99"];

function gameStart() {
    document.getElementById("rules").style.display = "none";
    //assign each circle a different color and predetermines answer
    var rngesus = 0;
    var luckyNum = Math.floor(Math.random() * (9-0+1)) + 0; //num corresponds to a color in array [0 - 9]
    //set text at top of page and set answer
    answer = colorArray[luckyNum];
    if(colorArray[luckyNum]=="saddlebrown") {
        document.getElementById("game").innerHTML = "Color: brown";
    }
    else {
        document.getElementById("game").innerHTML = "Color: " + colorArray[luckyNum];
    }
    var i;
    var exists = 0;
    var exists2 = 0;
    var t;
    var num;
    for(i = 0; i < 9; i++) {
        rngesus = Math.floor(Math.random() * (9-0+1)) + 0; //for selecting from colorArray [0-9]
        t = i+1;
        num = t.toString();
        //randomly color the circle
        document.getElementById(num).style.backgroundColor=colorArray[rngesus];
        if(rngesus == luckyNum) {
            exists2 = 1;
        }
        //randomly label the text in the circle
        t = Math.floor((Math.random() * (9-0+1)) + 0); //selecting from colorArray
        if(colorArray[t] == "saddlebrown") {
            document.getElementById(num).innerHTML="brown";
        }
        else {
            document.getElementById(num).innerHTML=colorArray[t];
        }
        if(t == luckyNum) {
            exists = 1;
        }
    }
    //check if text exists in circle, if not, pick random circle to insert text
    if(exists == 0) {
        t = Math.floor(Math.random() * (8-0+1)) + 0; // 0 <= t <= 8
        num = t.toString();
        if(colorArray[luckyNum]=="saddlebrown") {
            document.getElementById(num).innerHTML="brown";
        }
        else {
            document.getElementById(num).innerHTML=colorArray[luckyNum];
        }
    }
    if(exists2 == 0) {
        t = Math.floor(Math.random() * (8-0+1)) + 0; //pick random circle to color
        num = t.toString();
        document.getElementById(num).style.backgroundColor=colorArray[luckyNum];
    }
    document.getElementById("game").style.display = "block";
    document.getElementById("outer").style.display = "block";
}

function checkAnswer(clicked_id) {
    
}

//wjfiowefjowefjoweijfw

/*

function color_confusion() {
	
	
}



getMyInt().doSomethingElse()


doSomethingElse(getMyInt());

getMyInt(f
    function doSomethingElse()
    {
        //do something
    }
)


var a = getMyInt();
if(a == 5)
    {
        do something
    }
//do other things */