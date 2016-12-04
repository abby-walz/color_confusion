//var ref = new Firebase("https://colorconfusion-3efeb.firebaseio.com")
/*var firebase = require('firebase');
var config = {
    apiKey: "AIzaSyAeZGjwzDH_U3IkVeG0V7pGJm78gpPPGYc",
    authDomain: "colorconfusion-3efeb.firebaseapp.com",
    databaseURL: "https://colorconfusion-3efeb.firebaseio.com",
    storageBucket: "colorconfusion-3efeb.appspot.com",
    messagingSenderId: "386566070347"
};
firebase.initializeApp(config);*/

//sign up
$("signupButton").on("click", function() {
    //get email and pw
    console.log("hi")
    var email = $("email").val();
    var password = $("pw").val();
    console.log(email);
    console.log(password);
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        var errorCode = error.code;
        var errorMsg = error.message;
        alert(errorMsg);
        console.log(error);
    })
})

//log in