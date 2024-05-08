function getComputerChoice() {
  const choices = ["rock", "paper", "scissor"];
  const generatedChoice = choices[Math.floor(Math.random() * choices.length)];
  return generatedChoice.toString();
}

let playerSelection = " ";
let computerSelection = " ";
function playRound(playerSelection, computerSelection) {
  computerSelection = getComputerChoice();
  playerSelection = playerSelection.toLowerCase();
  console.log(playerSelection, computerSelection);
  if (playerSelection === "rock" && computerSelection === "scissor") {
    return (paraResult.textContent = "You Win! Rock beats Scissors!");
  } else if (playerSelection === "scissor" && computerSelection === "paper") {
    return (paraResult.textContent = "You Win! Scissor beats Paper!");
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return (paraResult.textContent = "You Win! Paper beats rock!");
  } else if (playerSelection === computerSelection) {
    return (paraResult.textContent = "Tie!");
  } else {
    return (paraResult.textContent = "You Lose!");
  }
}

function playGame() {
  playerSelection = prompt("Choose Rock, Paper, or Scissor!");
  console.log(playRound(playerSelection, computerSelection));
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

const div = document.querySelector("div");
const paraResult = document.createElement("p");

div.appendChild(paraResult);
