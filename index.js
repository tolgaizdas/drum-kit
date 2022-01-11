let numberOfDrumButtons = document.querySelectorAll(".drum").length;
let audio = new Audio();

// detect button press
document.querySelectorAll("button.drum").forEach(item => {
  item.addEventListener("click", function () {
    buttonContent = this.textContent;
    makeSound(buttonContent);
    buttonAnimation(buttonContent);
  })
});

// detect keyboard press
document.addEventListener("keydown", function (e) {
  makeSound(e.key);
  buttonAnimation(e.key);
});

function makeSound(e) {
  switch (e) {
    case "w":
      audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "k":
      audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "l":
      audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
  }
  audio.volume = 0.05;
}

buttonAnimation = (currentKey) => {
  if (document.body.contains(document.getElementsByClassName(currentKey)[0])) {
    let activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(() => {
      activeButton.classList.remove("pressed");
    }, 100);
  }
}