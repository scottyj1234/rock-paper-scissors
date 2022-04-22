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
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return `It's a tie! You both played ${playerSelection}!`
    }

    if (playerSelection === 'rock' && computerSelection === 'paper' ||
        playerSelection === 'scissors' && computerSelection === 'rock' ||
        playerSelection === 'paper' && computerSelection === 'scissors'){
        
        return `You lose! ${computerSelection} beats ${playerSelection}!`;
    } else {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
}