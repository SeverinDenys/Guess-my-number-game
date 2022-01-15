"use strict";

// First version of game with not clean code (better to apply in github for the first time)

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);
  //where is no input
  if (!guess) {
    document.querySelector(".message").textContent = "🤨 No number!";

    // when player wins
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct number!";
    document.querySelector("body").style.backgroundColor = "#c31432";
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector(".number").style.width = "30rem"; // when we use style. all values should be strings
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    //when guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Too high!";
      score--;
      document.querySelector(".score").textContent = score;

      //when player loses
    } else {
      document.querySelector(
        ".message"
      ).textContent = `😥 You've lost the game`;
      document.querySelector(".score").textContent = 0;
    }

    //when guess is to low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📉 Too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(
        ".message"
      ).textContent = `😥 You've lost the game`;
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#d31316";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";

  document.querySelector("body").style.backgroundColor = " #1483c3";
  document.querySelector(".number").style.width = "15rem";

  document.querySelector(".guess").value = "";
});
