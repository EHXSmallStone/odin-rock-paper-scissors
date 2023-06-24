function getComputerChoice() {
  const handSignals = ['rock', 'paper', 'scissors'];
  let getRandomNumber = () => Math.floor(Math.random() * 3);
  return handSignals[getRandomNumber()];
};

function playRound(playerSelection) {
  let result;
  const computerSelection = getComputerChoice();

  switch (playerSelection.target.id) {
    case 'rock':
      if (computerSelection === 'scissors') {
        playerPoints.textContent++;
        result = "You win! Rock beats Scissors";
      } else if (computerSelection === 'paper') {
        computerPoints.textContent++;
        result = "You lose! Paper beats Rock";
      } else {
        result = "It's a tie!";
      }
      break;

    case 'paper':
      if (computerSelection === 'rock') {
        playerPoints.textContent++;
        result = "You win! Paper beats Rock";
      } else if (computerSelection === 'scissors') {
        computerPoints.textContent++;
        result = "You lose! Scissors beats Paper";
      } else {
        result = "It's a tie!";
      }
      break;

    case 'scissors':
      if (computerSelection === 'paper') {
        playerPoints.textContent++;
        result = "You win! Scissors beats Paper";
      } else if (computerSelection === 'rock') {
        computerPoints.textContent++;
        result = "You lose! Rock beats Scissors";
      } else {
        result = "It's a tie!";
      }
  };

  results.textContent = result;
  return result;
};

const handSignal = document.querySelectorAll(".sign");
handSignal.forEach(sign => {
  sign.addEventListener("click", playRound);
});

const results = document.querySelector(".results")

const playerPoints = document.querySelector("#playerPoints");
const computerPoints = document.querySelector("#computerPoints");