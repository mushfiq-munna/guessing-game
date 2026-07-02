"use strict";

//elements
const check = document.querySelector(".check");
const input = document.querySelector(".input-number");
const correctAns = document.querySelector(".game-correct-ans");
const guessingText = document.querySelector(".guessing-text");
const score = document.querySelector(".score");
const highScore = document.querySelector(".high-score");
const playAgain = document.querySelector(".play-again");

//variables
let SECRRET_NUMBER = Math.trunc(Math.random() * 20 + 1);
let SCORE = 20;
let HIGH_SCORE = 0;

//display text
function displayGuessingText(text) {
  guessingText.textContent = text;
}

//CHECKING
check.addEventListener("click", function () {
  const inputNumber = Number(input.value);

  //when there is no input
  if (!inputNumber) displayGuessingText("Input a valid number!");
  //when player wins
  else if (inputNumber === SECRRET_NUMBER) {
    displayGuessingText("Correct Number!");
    correctAns.textContent = SECRRET_NUMBER;

    correctAns.style.backgroundColor = "#222";
    document.body.style.backgroundColor = "teal";

    if (SCORE > HIGH_SCORE) {
      HIGH_SCORE = SCORE;
      highScore.textContent = HIGH_SCORE;
    }
  }

  //when guess is wrong
  else if (inputNumber !== SECRRET_NUMBER) {
    if (SCORE > 1) {
      displayGuessingText(
        inputNumber > SECRRET_NUMBER ? "Too High!" : "Too Low!",
      );

      SCORE--;
      score.textContent = SCORE;
    } else {
      displayGuessingText("You lost the game!");
      score.textContent = 0;
    }
  }
});

//play again
playAgain.addEventListener("click", function () {
  SCORE = 20;
  SECRRET_NUMBER = Math.trunc(Math.random() * 20 + 1);

  displayGuessingText("Start Guessing!");
  document.body.style.backgroundColor = "#222";
  correctAns.style.backgroundColor = "teal";
  correctAns.textContent = "?";
  score.textContent = SCORE;
  input.value = "";
});
