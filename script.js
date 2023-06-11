alert("Let's play Rock, Paper, Scissors!");
requiredPrompt();

function requiredPrompt() {
  let answer = prompt("What's your choice?");
  if (answer === null) {
    alert("Please enter a valid value (Rock, Paper or Scissors)");
    requiredPrompt();
  } else if (answer.toLowerCase() === 'rock' || answer.toLowerCase() === 'paper' || answer.toLowerCase() === 'scissors') {
    game(answer.toLowerCase());
  } else {
    alert("Please enter a valid value (Rock, Paper or Scissors)");
    requiredPrompt();
  };
};

function getComputerChoice() {
  const handSignals = ['rock', 'paper', 'scissors'];
  let getRandomNumber = () => Math.floor(Math.random() * 3);
  return handSignals[getRandomNumber()];
};

function playRound(playerSelection) {
  let result;
  const computerSelection = getComputerChoice();

  switch (playerSelection) {
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

  return result;
};

function game(playerSelection) {
  let playerPoints = 0;
  let computerPoints = 0;

  const winRegExp = /^You win/i;
  const loseRegExp = /^You lose/i;
  const tieRegExp = /tie/i;

  for (let i = 1; i <= 5; i++) {
    let roundResult = playRound(playerSelection);
    console.log(`(Round ${i}) ${roundResult}`);
    alert(`(Round ${i}) ${roundResult}`);

    if (winRegExp.test(roundResult)) {
      playerPoints++;
      console.log(`\tYour score has increased!`);
    } else if (loseRegExp.test(roundResult)) {
      computerPoints++;
      console.log(`\tOh no! Computer score has increased!`)
    } else if (tieRegExp.test(roundResult)) {
      console.log("\tNo one earns points.")
    }
  };

  let pointsResults = `Results:\n\tYou: ${playerPoints} points\n\tComputer: ${computerPoints} points`;
  console.log(pointsResults);
  alert(pointsResults);

  if (playerPoints > computerPoints) {
    console.log("You win this game!");
    alert("You win this game!");
  } else if (playerPoints < computerPoints) {
    console.log("You lose this game!");
    alert("You lose this game!");
  } else if (playerPoints === computerPoints) {
    console.log("The game has tied!");
    alert("The game has tied!");
  };
};