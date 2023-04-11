const choices = document.querySelectorAll('.choices button');
const userScoreSpan = document.getElementById('user-score');
const computerScoreSpan = document.getElementById('computer-score');
const message = document.querySelector('.message');
const playAgainButton = document.getElementById('play-again');

let userScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function win(userChoice, computerChoice) {
  userScore++;
  userScoreSpan.textContent = userScore;
  computerScoreSpan.textContent = computerScore;
  message.textContent = `${userChoice} beats ${computerChoice}. You win!`;
}

function lose(userChoice, computerChoice) {
  computerScore++;
  userScoreSpan.textContent = userScore;
  computerScoreSpan.textContent = computerScore;
  message.textContent = `${computerChoice} beats ${userChoice}. You lose!`;
}

function draw(userChoice, computerChoice) {
  userScoreSpan.textContent = userScore;
  computerScoreSpan.textContent = computerScore;
  message.textContent = `${userChoice} and ${computerChoice} are the same. It's a draw!`;
}

function game(userChoice) {
  const computerChoice = getComputerChoice();

  switch (userChoice + computerChoice) {
    case 'rockscissors':
    case 'paperrock':
    case 'scissorspaper':
      win(userChoice, computerChoice);
      break;
    case 'rockpaper':
    case 'paperscissors':
    case 'scissorsrock':
      lose(userChoice, computerChoice);
      break;
    case 'rockrock':
    case 'paperpaper':
    case 'scissorsscissors':
      draw(userChoice, computerChoice);
      break;
  }

  if (userScore === 5 || computerScore === 5) {
    if (userScore > computerScore) {
      message.textContent = "You win the game!";
    } else {
      message.textContent = "You lose the game!";
    }

    for (const choice of choices) {
      choice.disabled = true;
    }

    playAgainButton.style.display = "block";
  }
}

function resetGame() {
  userScore = 0;
  computerScore = 0;
  userScoreSpan.textContent = userScore;
  computerScoreSpan.textContent = computerScore;
  message.textContent = "Make your choice!";
}

function enableButtons() {
  for (const choice of choices) {
    choice.disabled = false;
  }
  
  playAgainButton.style.display = "none";
}

// add event listeners to the choice buttons
for (const choice of choices) {
  choice.addEventListener('click', function() {
    game(this.id);
  });
}

// add event listener to the play again button
playAgainButton.addEventListener('click', function() {
  resetGame();
  enableButtons();
});

resetGame();
enableButtons();