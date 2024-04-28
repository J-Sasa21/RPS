function play() {
  var userInput = document
    .getElementById("userInput")
    .value.trim()
    .toLowerCase();
  var computerChoice = generateComputerChoice();
  var result = compareChoices(userInput, computerChoice);
  document.getElementById("result").innerText = result;
}

function generateComputerChoice() {
  var choices = ["rock", "paper", "scissors"];
  var randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function compareChoices(user, computer) {
  if (user === computer) {
    return "It's a tie!";
  } else if (
    (user === "rock" && computer === "scissors") ||
    (user === "paper" && computer === "rock") ||
    (user === "scissors" && computer === "paper")
  ) {
    return "You win!";
  } else {
    return "Computer wins!";
  }
}
