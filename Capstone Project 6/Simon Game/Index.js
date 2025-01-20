var userClickedPattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var started = true;

var level = 0;

$(document).keypress(function() {
  
  if (started) {
  
    $("h1").text("Level " + level);
  
    nextSequence();
  
    started = false;
  }
});

$("button").click( handler);
function handler(){

  var userChosenColour = this.getAttribute("class");
  
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  
  animatePress(userChosenColour);
  
  checkAnswer(userClickedPattern.length -1);
}

function checkAnswer(currentLevel){

  if(userClickedPattern[currentLevel] ==  gamePattern[currentLevel]){

    if(userClickedPattern.length === gamePattern.length){
  
      setTimeout(function () {
  
        nextSequence();
  
      }, 1000);
    }
  
  }else{
    
    playSound("wrong");

    $("body").addClass("game-over");
    $("h1").text("Game Over, Press Any Key to Restart");
    setTimeout(() => {
      $("body").removeClass("game-over");
    }, 200);

    startOver();
  }
}

function nextSequence() {
  
  userClickedPattern =[];
  
  level++;
  
  $("h1").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  
  var randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour); 

  $("." + randomChosenColour).fadeOut(100).fadeIn(100);

  playSound(randomChosenColour);

}

function playSound(name){
  
  var audio = new Audio("./sounds/" +name+ ".mp3");
  
  audio.play();
} 

function animatePress(currentColour){
  
  $("#" +currentColour).addClass("pressed");
  
  setTimeout(() => {
  
    $("#"+currentColour).removeClass("pressed");
  
  }, 100);
}

function startOver(){
  level = 0;
  gamePattern = [];
  started = true;
}




