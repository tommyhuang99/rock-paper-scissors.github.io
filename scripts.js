console.log("Hello Player");

/* user input a  variable*/
function getHumanChoice() {
  let humanChoice = prompt("Please choose rock, paper, or scissors?")
  return humanChoice;
}

/* computer output a random number from 1 to 3, */
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}



function playRound(humanChoice, computerChoice) {

  humanChoice = humanChoice.toLowerCase();

  console.log(`Player: ${humanChoice} , computer: ${computerChoice}`);

  if (humanChoice === computerChoice) {
    console.log("It's a Tie");
    return "tie";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("Player win");
    return "player";
  } else {
    console.log("Computer Win");
    return "computer";
  }
};

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let round = 1; round <= 5; round++) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    let result = playRound(humanSelection, computerSelection);

    if (result == "player") {
      humanScore++;
    } else if (result == "computer") {
      computerScore++;
    }
  }

  console.log("Game over!");
  if (humanScore > computerScore) {
    console.log("Player win all")
  } else if (humanScore < computerScore) {
    console.log("Computer win all")
  }
};

playGame();



