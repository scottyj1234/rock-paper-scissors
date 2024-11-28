let humanScore = 0;
let computerScore = 0;

const rock_button_element = document.querySelector("#rock");
const paper_button_element = document.querySelector("#paper");
const scissors_button_element = document.querySelector("#scissors");

rock_button_element.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});

paper_button_element.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
})

scissors_button_element.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
})

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
  let resultsString = "";
  if (humanChoice === computerChoice) {
    document.querySelector("div.results").textContent = `Draw! You both played ${humanChoice}`
    return "draw";
  }
  
  switch (humanChoice) {
    case "rock":
      if (computerChoice === "paper") {
        resultsString = `You lose! Paper covers ${humanChoice}`;
        computerScore++;
      } else {
        resultsString = `You win! ${humanChoice} breaks scissors!`;
        humanScore++;
      }
      break;

    case "paper":
      if (computerChoice === "scissors") {
        resultsString = `You lose! Scissors cuts ${humanChoice}`;
        computerScore++;
      } else {
        resultsString = `You win! ${humanChoice} covers rock!`;
        humanScore++;
      }
      break;
  
    case "scissors":
    if (computerChoice === "rock") {
      resultsString = `You lose! Rock breaks ${humanChoice}`;
      computerScore++;
    } else {
      resultsString = `You win! ${humanChoice} cuts paper!`;
      humanScore++;
    }
    break;

    default:
      console.error(`Unexpected human choice: ${humanChoice}`)
      break;
  }

  document.querySelector("div.results").textContent = resultsString;
  updateScores();

  return "not draw";
}

function updateScores() {
  document.querySelector("#humanScore").textContent = `You: ${humanScore}`;
  document.querySelector("#computerScore").textContent = `Computer: ${computerScore}`;
}

function playGame(){
  for (let i = 0; i < 5; ++i) {
    console.log(`Round ${i + 1}\n`)
    let humanChoice = getHumanChoice()
    let computerChoice = getComputerChoice()
    while (playRound(humanChoice, computerChoice) === "draw"){
      humanChoice = getHumanChoice();
      computerChoice = getComputerChoice();
    }
  }

  if (humanScore > computerScore) {
    console.log("Congratulations, you win!\n");
  } else {
    console.log("Sorry, you lose!\n");
  }
  console.log(`Final Score: You: ${humanScore}; Computer: ${computerScore}`);
}