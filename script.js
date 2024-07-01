function getComputerChoice() {
  const choices = ["rock", "paper", "scissor"];
  const generatedChoice = choices[Math.floor(Math.random() * choices.length)];
  return generatedChoice.toString();
}

let playerSelection = " ";
let computerSelection = " ";
let overall_score = 1;
function playRound(playerSelection, computerSelection) {
  computerSelection = getComputerChoice();
  playerSelection = playerSelection.toLowerCase();
  while (overall_score <= 5) {
    determineWinner(overall_score);
    if (playerSelection === "rock" && computerSelection === "scissor") {
      overall_score += 1;
      return (paraResult.textContent = "You Win! Rock beats Scissors!");
    } else if (playerSelection === "scissor" && computerSelection === "paper") {
      overall_score += 1;
      return (paraResult.textContent = "You Win! Scissor beats Paper!");
    } else if (playerSelection === "paper" && computerSelection === "rock") {
      overall_score += 1;
      return (paraResult.textContent = "You Win! Paper beats rock!");
    } else if (playerSelection === computerSelection) {
      return (paraResult.textContent = "Tie!");
    } else {
      return (paraResult.textContent = "You Lose!");
    }
  }
}

function determineWinner(overall_score) {
  if (overall_score === 5) {
    return (winnerResult.textContent = `YOU WIN, PLEASE EXIT THE GAME OVERALL SCORE IS ${overall_score}`);
  }
}
const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissor = document.querySelector("#scissor");

function clickPlayRound(event) {
  choice = event.target.id;
  switch (choice) {
    case "rock":
      playRound(choice);
      break;
    case "scissor":
      playRound(choice);
      break;
    case "paper":
      playRound(choice);
      break;
    default:
      console.log("Invalid");
  }
}

btnRock.addEventListener("click", clickPlayRound);
btnPaper.addEventListener("click", clickPlayRound);
btnScissor.addEventListener("click", clickPlayRound);

const div = document.querySelector("#result");
const paraResult = document.createElement("p");

div.appendChild(paraResult);

const winner_result = document.querySelector("#winner");
const winnerResult = document.createElement("p");

winner_result.appendChild(winnerResult);
