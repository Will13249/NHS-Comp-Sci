var index = 0;
var countries;
var timeleft = 10;

countries = ["China", "UnitedStates", "France", "Somalia", "Germany", "Argentina", "Canada", "Russia"];
             



onEvent("button1", "click", function( ) {
  setScreen("screen2");
  updateScreen();
  updateText();
  updateText2();
  updateText3();
  updateText4();
});

function updateScreen() {
  index = randomNumber(0, countries.length - 1);
  setImageURL("image2", countries[index] + ".jpg"); 
  setImageURL("image3", countries[index] + ".jpg");
  console.log(countries[index]);
}

function updateText() {
  index = randomNumber(0, countries.length -1);
  setProperty("button2", "text", countries[index]);
}
function updateText2() {
  index = randomNumber(0, countries.length -1);
  setProperty("button3", "text", countries[index]);
}
function updateText3() {
  index = randomNumber(0, countries.length -1);
  setProperty("button4", "text", countries[index]);
}
function updateText4() {
  index = randomNumber(0, countries.length -1);
  setProperty("button5", "text", countries[index]);
}

onEvent("label7", "click", function( ) {
  setScreen("screen5");
});
onEvent("label8", "click", function( ) {
  setScreen("screen5");
});


timedLoop(1000, function() {
  timeleft = timeleft-1;
  setText("Timer", "Time:" + timeleft);
if (timeleft == 0) {
 stopTimedLoop();
 setScreen("screen4");
}
});


// This is my project repository file
