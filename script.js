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
      computerSelection === 'scissors' ? result = "You win! Rock beats Scissors"
      : computerSelection === 'paper' ? result = "You lose! Paper beats Rock"
      : result = "It's a tie!"
      break;

    case 'paper':
      computerSelection === 'rock' ? result = "You win! Paper beats Rock"
      : computerSelection === 'scissors' ? result = "You lose! Scissors beats Paper"
      : result = "It's a tie!"
      break;

    case 'scissors':
      computerSelection === 'paper' ? result = "You win! Scissors beats Paper"
      : computerSelection === 'rock' ? result = "You lose! Rock beats Scissors"
      : result = "It's a tie!"
  };

  results.textContent = result;
  return result;
};

const handSignal = document.querySelectorAll(".sign");
handSignal.forEach(sign => {
  sign.addEventListener("click", playRound);
});

const results = document.querySelector(".results")