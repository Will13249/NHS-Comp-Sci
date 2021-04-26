var index = 0;
var indx;
var ind;
var wrong1;
var wrong2;
var wrong3;
var countries;
var timeleft = 10;
var correctanswer;
var correctbutton;

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
  correctbutton = buttons[indx];
  wrong1 = randomNumber(0, countries.length - 1);
  wrong2 = randomNumber(0, countries.length - 1);
  wrong3 = randomNumber(0, countries.length - 1);
  while(wrong1 == countries[index]){
    wrong1 = randomNumber(0, countries.length - 1);
  }
  while(wrong2 == countries[index] || wrong2 == wrong1) {
    wrong2 = randomNumber(0, countries.length - 1);
  }
  while(wrong3 == countries[index] || wrong3 == wrong2 == wrong3 == wrong2) {
    wrong3 = randomNumber(0, countries.length - 1);
  }
  setProperty("button2", "text", wrong1);
}

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
