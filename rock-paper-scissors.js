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

function getPlayerPlay() {
    let playerResponse = window.prompt("Please enter your move (rock, paper, or scissors)");
    playerResponse = playerResponse ? playerResponse.toLowerCase() : null;
    const validResponses = ['rock', 'paper', 'scissors'];

    while (!validResponses.includes(playerResponse)){
        if (playerResponse){
            playerResponse = window.prompt(`${playerResponse} is not a valid response. Please enter "rock", "paper, or "scissors".`);
        } else {
            playerResponse = window.prompt(`No, you have to play. Please enter "rock", "paper, or "scissors".`);
        }

        playerResponse = playerResponse.toLowerCase();
    }

    return playerResponse;
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

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; ++i){
        console.log(`ROUND ${i+1}`);
        let result = playRound(getPlayerPlay(), computerPlay());
        switch (result.slice(0, 5)) {
            case `You l`:
                ++computerScore;
                break;
            case `It's `:
                break;
            case `You w`:
                ++playerScore;
                break;
        }

        console.log(result);
    }

    if (playerScore > computerScore) {
        console.log("Congratulations! You won!");
    }
    else if (playerScore < computerScore) {
        console.log("Oh no! You lost!");
    }
    else {
        console.log("You tied!");
    }

    console.log(`You: ${playerScore} wins. Computer: ${computerScore} wins.`);
}