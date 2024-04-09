function getComputerChoice() {
  let choice = getRandom(1, 3);

  switch (choice) {
    case 1:
      return "Rock";
    case 2:
      return "Paper";
    case 3:
      return "Scissors";
  }
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}
