let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
  const randomChoiceInteger = Math.random() * 3
  if(randomChoiceInteger < 1) {
    return "rock"
  } else if (randomChoiceInteger < 2) {
    return "paper"
  } else {
    return "scissors"
  }
}

function getHumanChoice() {
  const validChoices = ["rock", "paper", "scissors"];
  let playerChoice = prompt('What play would you like to make?\nEnter "rock", "paper", or "scissors"');

  while (!validChoices.includes(playerChoice)) {
    playerChoice = prompt('That was not a valid choice. Please enter a valid play\nEnter "rock", "paper", or "scissors"')
  }

  return playerChoice
}
