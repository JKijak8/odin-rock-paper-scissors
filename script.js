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
  while (true) {
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();

    if (computerSelection == playerSelection) {
      console.log("Tie! Try again.");
    } else if (
      (computerSelection === "Rock" && playerSelection === "Scissors") ||
      (computerSelection === "Paper" && playerSelection === "Rock") ||
      (computerSelection === "Scissors" && playerSelection === "Paper")
    ) {
      console.log(
        `You lose this round! ${computerSelection} beats ${playerSelection}.`,
      );
      return "computer";
    } else {
      console.log(
        `You win this round! ${playerSelection} beats ${computerSelection}.`,
      );
      return "player";
    }
  }
}

function capitalizeFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}
