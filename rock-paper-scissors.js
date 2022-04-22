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