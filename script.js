const playerScoreEl = document.getElementById("playerScore");
const playerChoiceEl = document.getElementById("playerChoice");
const computerScoreEl = document.getElementById("computerScore");
const computerChoiceEl = document.getElementById("computerChoice");
const resultText = document.getElementById("resultText");

const playerRock = document.getElementById("playerRock");
const playerPaper = document.getElementById("playerPaper");
const playerScissors = document.getElementById("playerScissors");
const playerLizard = document.getElementById("playerLizard");
const playerSpock = document.getElementById("playerSpock");

const computerRock = document.getElementById("computerRock");
const computerPaper = document.getElementById("computerPaper");
const computerScissors = document.getElementById("computerScissors");
const computerLizard = document.getElementById("computerLizard");
const computerSpock = document.getElementById("computerSpock");

const allGameIcons = document.querySelectorAll(".far");

const resetButton = document.querySelector(".reset-container");

let computerChoice = "";
let playerScoreNumber = 0;
let computerScoreNumber = 0;

const choices = {
  rock: { name: "Rock", defeats: ["scissors", "lizard"] },
  paper: { name: "Paper", defeats: ["rock", "spock"] },
  scissors: { name: "Scissors", defeats: ["paper", "lizard"] },
  lizard: { name: "Lizard", defeats: ["paper", "spock"] },
  spock: { name: "Spock", defeats: ["scissors", "rock"] },
};

// Reset all selected icons
function resetSelected() {
  allGameIcons.forEach((icon) => {
    icon.classList.remove("selected");
  });
}

// random computer choice
function computerRandomChoice() {
  const computerChoiceNumber = Math.random();
  if (computerChoiceNumber < 0.2) {
    computerChoice = "rock";
  } else if (computerChoiceNumber <= 0.4) {
    computerChoice = "paper";
  } else if (computerChoiceNumber <= 0.6) {
    computerChoice = "scissors";
  } else if (computerChoiceNumber <= 0.8) {
    computerChoice = "lizard";
  } else {
    computerChoice = "spock";
  }
}

// Display Computer choice
function displayComputerChoice() {
  switch (computerChoice) {
    case "rock":
      computerRock.classList.add("selected");
      computerChoiceEl.textContent = " ---Rock";
      break;
    case "paper":
      computerPaper.classList.add("selected");
      computerChoiceEl.textContent = " ---Paper";
      break;
    case "scissors":
      computerScissors.classList.add("selected");
      computerChoiceEl.textContent = " ---Scissors";
      break;
    case "lizard":
      computerLizard.classList.add("selected");
      computerChoiceEl.textContent = " ---Lizard";
      break;
    case "spock":
      computerSpock.classList.add("selected");
      computerChoiceEl.textContent = " ---Spock";
      break;
    default:
      break;
  }
}

// Update the both player´s score
function updateScore(choice) {
  if (choice === computerChoice) {
    resultText.textContent = "It´s a tie";
  } else {
    const userWins = choices[choice].defeats.includes(computerChoice);
    if (userWins) {
      playerScoreNumber++;
      playerScoreEl.textContent = playerScoreNumber;
      resultText.textContent = "You Won";
    } else {
      computerScoreNumber++;
      computerScoreEl.textContent = computerScoreNumber;
      resultText.textContent = "Computer won";
    }
  }
}

// call functions to process turn
function checkResult(choice) {
  // reset selected before make select
  resetSelected();
  computerRandomChoice();
  displayComputerChoice();
  updateScore(choice);
}

// Passing player choice value and style that choice
function select(choice) {
  checkResult(choice);
  // Update player choice and style it
  switch (choice) {
    case "rock":
      playerRock.classList.add("selected");
      playerChoiceEl.textContent = " ---Rock";
      break;
    case "paper":
      playerPaper.classList.add("selected");
      playerChoiceEl.textContent = " ---Paper";
      break;
    case "scissors":
      playerScissors.classList.add("selected");
      playerChoiceEl.textContent = " ---Scissors";
      break;
    case "lizard":
      playerLizard.classList.add("selected");
      playerChoiceEl.textContent = " ---Lizard";
      break;
    case "spock":
      playerSpock.classList.add("selected");
      playerChoiceEl.textContent = " ---Spock";
      break;
    default:
      break;
  }
}

// reset the game
function reset() {
  playerScoreNumber = 0;
  computerScoreNumber = 0;
  computerScoreEl.textContent = computerScoreNumber;
  playerScoreEl.textContent = playerScoreNumber;
  resultText.textContent = "Select your option";
  resetSelected();
}

// Event listener for reset the game
resetButton.addEventListener("click", reset);
