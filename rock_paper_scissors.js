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

function playRound(humanChoice, computerChoice) {
  const lowerHumanChoice = humanChoice.toLowerCase()
  if (lowerHumanChoice === computerChoice) {
    console.log(`Draw! You both played ${humanChoice}`)
    return;
  }
  
  switch (lowerHumanChoice) {
    case "rock":
      if (computerChoice === "paper") {
        console.log(`You lose! Paper covers ${humanChoice}`);
        computerScore++;
      } else {
        console.log(`You win! ${humanChoice} breaks scissors!`);
        humanScore++;
      }
      break;

    case "paper":
      if (computerChoice === "scissors") {
        console.log(`You lose! Scissors cuts ${humanChoice}`);
        computerScore++;
      } else {
        console.log(`You win! ${humanChoice} covers rock!`);
        humanScore++;
      }
      break;
  
    case "scissors":
    if (computerChoice === "rock") {
      console.log(`You lose! Rock breaks ${humanChoice}`);
      computerScore++;
    } else {
      console.log(`You win! ${humanChoice} cuts paper!`)
      humanScore++;
    }
    break;

    default:
      console.error(`Unexpected human choice: ${humanChoice}`)
      break;
  }
}