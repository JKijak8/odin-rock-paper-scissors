const CHOICES = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

function getHumanChoice() {
  return prompt("Choose 'rock', 'paper' or 'scissors'").toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  const winnerText = document.getElementById("winner-text");

  if (humanChoice === computerChoice) {
    winnerText.textContent = "Tie! Nobody wins.";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    winnerText.textContent = `You win! ${capitalize(
      humanChoice
    )} beats ${capitalize(computerChoice)}.`;
  } else {
    winnerText.textContent = `You lose! ${capitalize(
      computerChoice
    )} beats ${capitalize(humanChoice)}.`;
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
