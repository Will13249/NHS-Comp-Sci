var index = 0;
var countries;
var timeleft = 15;
var correctanswer;
var score = 0;

countries = ["China", "UnitedStates", "France", "Somalia", "Germany", "Argentina", "Canada", "Russia", "Mexico", "Norway", "Spain", "Turkey", "Australia", "Brazil", "Greece", "India", "Ireland", "Japan"];
     



onEvent("button1", "click", function( ) {
  setScreen("screen2");
  updateScreen();
});

function updateScreen() {
  index = randomNumber(0, countries.length - 1);
  setImageURL("image2", countries[index] + ".jpg");
  correctanswer = countries[index];
  setNumber("label9", score);
  timeleft = 15;
  setText("text_input1", "");
    }


onEvent("button2", "click", function( ) {
    if(getText("text_input1") == countries[index]) {
    setScreen("screen3");  
    score = score + 50;
    }
    else {
      setScreen("screen4");
    score = score - 50;
    }
});


onEvent("label7", "click", function( ) {
  setScreen("screen2");
  updateScreen();
});
onEvent("label8", "click", function( ) {
  setScreen("screen2");
  updateScreen();
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
