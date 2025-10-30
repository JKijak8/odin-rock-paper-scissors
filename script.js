let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];

  return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice() {
  return prompt("Choose 'rock', 'paper' or 'scissors'").toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("Tie! Nobody wins.");
    playRound(getHumanChoice(), getComputerChoice());
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(
      `You win! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}.`
    );
    humanScore++;
  } else {
    console.log(
      `You lose! ${capitalize(computerChoice)} beats ${capitalize(
        humanChoice
      )}.`
    );
    computerScore++;
  }
}

function capitalize(word) {
  if (typeof word === "string" && word != false) {
    return word.replace(word[0], word[0].toUpperCase());
  } else return word;
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();
playRound(humanChoice, computerChoice);
