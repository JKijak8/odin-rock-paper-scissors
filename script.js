const CHOICES = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

function getHumanChoice() {
  return prompt("Choose 'rock', 'paper' or 'scissors'").toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("Tie! Nobody wins.");
    return playRound(getHumanChoice(), getComputerChoice());
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(
      `You win! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}.`
    );
    return "human";
  } else {
    console.log(
      `You lose! ${capitalize(computerChoice)} beats ${capitalize(
        humanChoice
      )}.`
    );
    return "computer";
  }
}

function capitalize(word) {
  if (typeof word === "string" && word != false) {
    return word.replace(word[0], word[0].toUpperCase());
  } else return word;
}

let buttons = document.getElementById("button-wrapper");

buttons.addEventListener("click", (e) => {
  if (CHOICES.includes(e.target.id)) {
    playRound(e.target.id, getComputerChoice());
  }
});
