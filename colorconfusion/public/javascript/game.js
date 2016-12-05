// game.js
// Color Confusion

/*

var color_possibilities;

color_possibilities["indigo"] = "#FFFFFF"


*/

var score = 0;
var colorArray = ["red", "orange", "yellow", "green", "blue", "purple", "white", "black", "gray", "saddlebrown"];
//var circleID = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

function gameStart() {
    document.getElementById("rules").style.display = "none";
    document.getElementById("game").style.display = "block";
    document.getElementById("outer").style.display = "block";
    
    //assign each circle a different color and predetermines answer
    var rngesus = 0;
    var luckyNum = Math.floor((Math.random() * 10) + 1);
    var i;
    for(i = 0; i < 9; i++) {
        rngesus = Math.floor((Math.random() * 10) + 1);
        //circleID[i] = colorArray[rngesus];
        var t = i+1;
        var num = t.toString();
        console.log(num);
        console.log(colorArray[rngesus]);
        document.getElementById(num).style.backgroundColor=colorArray[rngesus]; //changes color of circle
        if(i == luckyNum) { //sets text
            if(colorArray[rngesus]=="saddlebrown") {
                document.getElementById("game").innerHTML = "Color: brown";
            }
            else {
                document.getElementById("game").innerHTML = "Color: " + colorArray[rngesus];
            }
        }
    }
    
    
    
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