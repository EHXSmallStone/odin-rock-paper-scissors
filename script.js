const handSignal = document.querySelectorAll(".sign");
handSignal.forEach(sign => {
  sign.addEventListener("click", playRound);
});

const roundResult = document.querySelector(".roundResult")
const gameResult = document.querySelector(".gameResult");

const playerPoints = document.querySelector("#playerPoints");
const computerPoints = document.querySelector("#computerPoints");

function getComputerChoice() {
  const handSignals = ['rock', 'paper', 'scissors'];
  let getRandomNumber = () => Math.floor(Math.random() * 3);
  return handSignals[getRandomNumber()];
};

function playRound(playerSelection) {
  let result;
  const computerSelection = getComputerChoice();
  playerSelection = playerSelection.target.id;

  switch (playerSelection) {
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

  changeSelectionImg(playerSelection, computerSelection);
  roundResult.textContent = result;
  if (playerPoints.textContent >= 5 || computerPoints.textContent >= 5) gameOver();
};

const playerSelectionImg = document.querySelector(".playerSelection img");
const computerSelectionImg = document.querySelector(".computerSelection img");

function changeSelectionImg(playerSelection, computerSelection) {
  switch(playerSelection) {
    case 'rock':
      playerSelectionImg.src = "./images/rock.png";
      break;
    
    case 'paper':
      playerSelectionImg.src = "./images/paper.png";
      break;

    case 'scissors':
      playerSelectionImg.src = "./images/scissors.png";
      break;
  };

  switch(computerSelection) {
    case 'rock':
      computerSelectionImg.src = "./images/rock.png";
      break;
    
    case 'paper':
      computerSelectionImg.src = "./images/paper.png";
      break;

    case 'scissors':
      computerSelectionImg.src = "./images/scissors.png";
      break;
  };
};

function gameOver() {
  handSignal.forEach(sign => {
    sign.hidden = true;
  });

  if (playerPoints.textContent >= 5) {
    gameResult.textContent = "You win this game!";
  } else {
    gameResult.textContent = "You lose this game... :(";
  }
  
  gameResult.hidden = false;
  setTimeout(() => {replay.hidden = false;}, 1500);
};

const replay = document.querySelector(".replay");
replay.addEventListener("click", () => {
  playerSelectionImg.src = "./images/player-question-mark.png";
  computerSelectionImg.src = "./images/computer-question-mark.png";
  replay.hidden = true;
  gameResult.hidden = true;
  playerPoints.textContent = 0;
  computerPoints.textContent = 0;
  roundResult.textContent = "First to score 5 points wins the game!";
  handSignal.forEach(sign => {
    sign.hidden = false;
  })
});