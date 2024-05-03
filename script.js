let buttons = document.querySelector("#buttons");
let choice = buttons.addEventListener("click", (event) => {
  playRound(whichButton(event));
});

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

function playRound(playerSelection) {
  while (true) {
    let computerSelection = getComputerChoice();

    if (computerSelection === playerSelection) {
      console.log("Tie! Try again.");
      return;
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

function whichButton(event) {
  let target = event.target;
  switch (target.id) {
    case "rock":
      return "Rock";
    case "paper":
      return "Paper";
    case "scissors":
      return "Scissors";
  }
}

function capitalizeFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}
