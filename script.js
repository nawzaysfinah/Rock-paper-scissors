// Write function that plays a single round of RPS. It should take two parameters: playerSelection, computerSelection
// const playerSelection = "ROCK";
// const computerSelection = getComputerChoice();
let playerScore = 0;
let computerScore= 0 ;
// let gameOn = true;

// console.log("player chose " + playerSelection);
// console.log("computer chose " + computerSelection);



// Make your function's playerSelection parameter case-insensitive

while (true) {
let selection = prompt("Rock, Paper, Scissors?")
const playerSelection = selection.toUpperCase();
const computerSelection = getComputerChoice();

let gameOn = true;

console.log("player chose " + playerSelection);
console.log("computer chose " + computerSelection);
  // Function getComputerChoice(); to return Rock, Paper, Scissors at random
  function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*3)
    switch(randomNumber) {
      case 0:
        return 'ROCK'
      case 1:
        return 'PAPER'
      case 2:
        return 'SCISSORS'
    }
  }

  function playRound(playerSelection, computerSelection) {
    // your code here!
    // if playerSelection and computerSelection are same, it is a tie
    if (playerSelection === computerSelection) {
       console.log("it's a tie!")
       console.log("player: " + playerScore + " " + "computer: " + computerScore)
    }
    else {
  // list out all scenarios player wins
      if ((playerSelection === 'ROCK' && computerSelection === "SCISSORS") || 
      (playerSelection === 'PAPER' && computerSelection === "ROCK") || 
      (playerSelection === 'SCISSORS' && computerSelection === "SCISSORS")) {
        console.log("player wins!");
        playerScore++;
        console.log("player: " + playerScore + " " + "computer: " + computerScore)

      }
      else {
        console.log("computer wins!");
        computerScore++;
        console.log("player: " + playerScore + " " + "computer: " + computerScore)
      }
    }
}

console.log(playRound(playerSelection, computerSelection));

  if (playerScore === 5 || computerScore === 5) {
    console.log("Game is over!")
    break;
  }
}