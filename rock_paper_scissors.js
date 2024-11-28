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

function playRound(humanChoice, computerChoice) {
  if (isEndGame()) return;

  let resultsString = "";
  if (humanChoice === computerChoice) {
    document.querySelector("div.results").textContent = `Draw! You both played ${humanChoice}`
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

  if (isEndGame()) {
    const endGameMessageElement = document.querySelector("div.endGame");
    if (humanScore > computerScore) {
      endGameMessageElement.textContent = "Congratulations! You Win!";
    } else {
      endGameMessageElement.textContent = "You lose!";
    }
  }
}

function updateScores() {
  document.querySelector("#humanScore").textContent = `You: ${humanScore}`;
  document.querySelector("#computerScore").textContent = `Computer: ${computerScore}`;
}

function isEndGame() {
  return humanScore >= 5 || computerScore >= 5;
}