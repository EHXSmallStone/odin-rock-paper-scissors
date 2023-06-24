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

  if (playerPoints.textContent >= 5) {
    gameOver();
    results.textContent = "You win this game!";
  } else if (computerPoints.textContent >= 5) {
    gameOver();
    results.textContent = "You lose this game... :("
  } else {
    results.textContent = result;
    return;
  }
};

const handSignal = document.querySelectorAll(".sign");
handSignal.forEach(sign => {
  sign.addEventListener("click", playRound);
});

const results = document.querySelector(".results")

const playerPoints = document.querySelector("#playerPoints");
const computerPoints = document.querySelector("#computerPoints");

function gameOver() {
  handSignal.forEach(sign => {
    sign.hidden = true;
  })
};

// SI un jugador alcanza los 5 puntos, el juego debe terminar:
  // Se anuncia el ganador en results div
  // gameOver() Los botones sign deben esconderse (hidden true) y el boton Replay debe de aparecer para reiniciar el juego