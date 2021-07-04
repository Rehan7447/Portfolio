var buttonColors = ["red", "blue", "green", "yellow"];
var started = false;
var level = 0;

var computerSequence = [];
var playerSequence = [];

$(document).keypress(function() {
  if (started === false) {
    started = true;
    nextSequence();
  }
});

function nextSequence() {
  level++;
  $("#level-title").text("Level " + level);
  playerSequence = [];
  var randomNumber = Math.floor(Math.random() * 4);
  var randomNumberColor = buttonColors[randomNumber];
  computerSequence.push(randomNumberColor);
  $("#" + randomNumberColor).fadeIn(100).fadeOut(100).fadeIn(100);
  playPressedButtonSound(randomNumberColor);
}

$(".btn").click(function() {
  var clickedButton = $(this).attr("id");
  playerSequence.push(clickedButton);
  animatePressedButton(clickedButton);
  playPressedButtonSound(clickedButton);
  checkSequence(playerSequence.length - 1);
});


function checkSequence(currentIndex) {
  if (computerSequence[currentIndex] === playerSequence[currentIndex]) {
    if (computerSequence.length === playerSequence.length) {
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }
  } else {
    playPressedButtonSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);
    level = 0;
    computerSequence = [];
    started = false;
  }
}

function animatePressedButton(buttonColor) {
  $("#" + buttonColor).addClass("pressed");
  setTimeout(function() {
    $("#" + buttonColor).removeClass("pressed");
  }, 100)
}

function playPressedButtonSound(buttonPressed) {
  new Audio("sounds/" + buttonPressed + ".mp3").play();
}
