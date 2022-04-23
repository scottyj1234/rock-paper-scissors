
function computerPlay() {
    const choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;
        default:
            console.log("Somehow the computer chose something other than rock, paper, or scissors...");
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerScore >= 5 || computerScore >= 5){
        roundResult = `The game is over. `;
        roundResult += (playerScore > computerScore) ? `You won the game!` : `You lost the game!`;
        return;
    }

    playerSelection 
    if (playerSelection === computerSelection) {
        roundResult = "It's a tie!";
    }
    else if (playerSelection === 'Rock' && computerSelection === 'Paper' ||
        playerSelection === 'Scissors' && computerSelection === 'Rock' ||
        playerSelection === 'Paper' && computerSelection === 'Scissors'){
        
        roundResult = `You lose this round! ${computerSelection} beats ${playerSelection.toLowerCase()}!`;
        ++computerScore;
    } else {
        roundResult = `You win this round! ${playerSelection} beats ${computerSelection.toLowerCase()}`;
        ++playerScore;
    }

    if (playerScore === 5) {
        roundResult = `You win this round and the game! ${playerSelection} beats ${computerSelection.toLowerCase()}`
    }

    if (computerScore === 5) {
        roundResult = `You lose this round and the game! ${computerSelection} beats ${playerSelection.toLowerCase()}!`
    }

    lastPlayerPlay = playerSelection;
    lastComputerPlay = computerSelection;
    ++round;
}

function updateResults() {
    document.querySelector('.results .round').textContent = `ROUND: ${round === 1 ? 1 : round - 1}`;
    document.querySelector('.results .last-player-move').textContent = `Player's Move: ${lastPlayerPlay}`;
    document.querySelector('.results .last-computer-move').textContent = `Computer's Move: ${lastComputerPlay}`;
    document.querySelector('.results .round-result').textContent = `${roundResult}`;
    document.querySelector('.results .player-score').textContent = `Player: ${playerScore}`;
    document.querySelector('.results .computer-score').textContent = `Computer: ${computerScore}`;
}

let playerScore = 0;
let computerScore = 0;
let lastPlayerPlay = '';
let lastComputerPlay = '';
let roundResult = 'Awaiting first round results...';
let round = 1;

const playerRockButton = document.querySelector('#rockBtn');
const playerPaperButton = document.querySelector('#paperBtn');
const playerScissorsButton = document.querySelector('#scissorsBtn');
const resultsContainer = document.querySelector('.results');

playerRockButton.addEventListener('click', () => {
    playRound('Rock', computerPlay())
    updateResults();
});
playerPaperButton.addEventListener('click', () => {
    playRound('Paper', computerPlay())
    updateResults();
});
playerScissorsButton.addEventListener('click', () => {
    playRound('Scissors', computerPlay())
    updateResults();
});

updateResults();
