function getComputerChoice(){
    const choices = ["rock","paper","scissor"];
    const generatedChoice = choices[Math.floor(Math.random() * choices.length)];
    return generatedChoice.toString();
}

let playerSelection = " ";
let computerSelection = " ";
function playRound(playerSelection,computerSelection){
    computerSelection = getComputerChoice();
    playerSelection = playerSelection.toLowerCase();
    console.log(playerSelection,computerSelection);
    if(playerSelection === 'rock' && computerSelection === 'scissor'){
        return ('You Win! Rock beats Scissors!');
    }else if(playerSelection === 'scissor' && computerSelection === 'paper'){
        return ('You Win! Scissor beats Paper!')
    }else if(playerSelection === 'paper' && computerSelection === 'rock'){
       return ('You Win! Paper beats rock!');
    }else if(playerSelection === computerSelection){
        return('Tie!')
    }else{
        return('You Lose!')
    }
}

function playGame(){
    playerSelection = prompt("Choose Rock, Paper, or Scissor!");
    console.log(playRound(playerSelection,computerSelection));
};

playGame();
playGame();
playGame();
playGame();
playGame();
