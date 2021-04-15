var index = 0;
var indx;
var countries;
var timeleft = 10;
var correctanswer;

countries = ["China", "UnitedStates", "France", "Somalia", "Germany", "Argentina", "Canada", "Russia"];
var buttons = ["button2", "button3", "button4", "button5"];     



onEvent("button1", "click", function( ) {
  setScreen("screen2");
  updateScreen();
});

function updateScreen() {
  index = randomNumber(0, countries.length - 1);
  setImageURL("image2", countries[index] + ".jpg");
  correctanswer = countries[index];
  indx = randomNumber(0, buttons.length - 1);
  setProperty(buttons[indx], "text", countries[index]);
}
onEvent(buttons[indx], "click", function( ) {
  setScreen("screen3");
});



onEvent("label7", "click", function( ) {
  setScreen("screen2");
});
onEvent("label8", "click", function( ) {
  setScreen("screen2");
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
