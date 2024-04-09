function getComputerChoice() {
  const choice = getRandom(1, 3);

  switch (choice) {
    case 1:
      return "Rock";
    case 2:
      return "Paper";
    case 3:
      return "Scissors";
  }
}

function getPlayerChoice() {
  while (true) {
    let choice = prompt("Enter your choice: ");
    choice = choice.toLowerCase();
    choice = capitalizeFirst(choice);

    if (choice === "Rock" || choice === "Paper" || choice === "Scissors") {
      return choice;
    } else {
      console.log("Wrong option. Please try again.");
    }
  }
}

function playRound() {
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();

  if (
    (computerSelection === "Rock" && playerSelection === "Scissors") ||
    (computerSelection === "Paper" && playerSelection === "Rock") ||
    (computerSelection === "Scissors" && playerSelection === "Paper")
  ) {
    console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
  }
}

function capitalizeFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}
