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

for (let i = 0; i < 10; i++) {
  console.log(getComputerChoice())
}