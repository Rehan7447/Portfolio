var nymberOfButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < nymberOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var butinnerHTML = this.innerHTML;
    makeSound(butinnerHTML);
    animateButton(butinnerHTML);
  });
}

document.addEventListener("keypress", function(event) {
  makeSound(event.key);
  animateButton(event.key);
})

function makeSound(key) {
  switch (key) {
    case "w":
      new Audio("sounds/crash.mp3").play();
      break;
    case "a":
      new Audio("sounds/kick-bass.mp3").play();
      break;
    case "s":
      new Audio("sounds/snare.mp3").play();
      break;
    case "d":
      new Audio("sounds/tom-1.mp3").play();
      break;
    case "j":
      new Audio("sounds/tom-2.mp3").play();
      break;
    case "k":
      new Audio("sounds/tom-3.mp3").play();
      break;
    case "l":
      new Audio("sounds/tom-4.mp3").play();
      break;
    default:

  }
}

function animateButton(key) {
  document.querySelector("." + key).classList.add("pressed");
  setTimeout(function() {
    document.querySelector("." + key).classList.remove("pressed");
  }, 100)
}
