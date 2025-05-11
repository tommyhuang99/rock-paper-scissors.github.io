
/* computer output a random number from 1 to 3, */
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(humanChoice, computerChoice) {

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

const btR = document.querySelector("#btR");
const btP = document.querySelector("#btP");
const btS = document.querySelector("#btS");


btR.addEventListener("click", () => handlePlayerChoice("rock"));

btP.addEventListener("click", () => handlePlayerChoice("paper"));


btS.addEventListener("click", () => handlePlayerChoice("scissors"));


let roundCount = 0;
let humanScore = 0;
let computerScore = 0;

function handlePlayerChoice(playerChoice) {
  if (roundCount >= 5) return;

  let computerSelection = getComputerChoice();
  let result = playRound(playerChoice, computerSelection);

  if (result == "player") {
    humanScore++;
  } else if (result == "computer") {
    computerScore++;
  }

  roundCount++;

  if (roundCount === 5) {
    console.log("Game over!");
    if (humanScore > computerScore) {
      console.log("Player win all")
    } else if (humanScore < computerScore) {
      console.log("Computer win all")
    } else {
      console.log("it's a tie!")
    }
  }
};



