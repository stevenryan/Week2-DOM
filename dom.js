var rightBttn = document.getElementById("right")
var wrongBttn = document.getElementById("wrong")
var hoverMe = document.getElementById("hoverMe")
var theKey = document.getElementById("theKey")
var submitBttn = document.getElementById("submitBttn")
var inputTest = document.getElementById("inputTest")

rightBttn.onclick = function() {
  console.log("I'm right");
}

wrongBttn.onclick = function() {
  console.log("No, I'm right!");
}

hoverMe.onmouseover = function () {
  alert("Hey! Can't you READ?");
}

document.addEventListener('keypress', (event) => {
  keyName = event.key;
  theKey.innerHTML = keyName;
});

submitBttn.onclick = function() {
  var user = document.getElementById("username").value
  var pass = document.getElementById("password").value
  if (user.length < 14 && user.length > 0 && pass == 12345678) {
    inputTest.innerHTML = "Congrats on knowing your Login Info!";
  } else {
    alert("Incorrect Username or Password");
  }
}
