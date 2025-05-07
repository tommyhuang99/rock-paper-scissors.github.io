console.log("Hello Player");

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  // your code here!
  /* user input a  variable*/
  function getHumanChoice() {
    let humanChoice = prompt("Please choose rock, paper, or scissors?");
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
  }

  /* computer output a random number from 1 to 3, */

  function getComputerChoice(min, max) {
    const choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  let humanSelection = getHumanChoice();
  let computerChoice = getComputerChoice();

  if (humanSelection === computerChoice) {
    console.log("It's a Tie");
  } else if (
    (humanSelection === "rock" && computerChoice === "scissors") ||
    (humanSelection === "paper" && computerChoice === "rock") ||
    (humanSelection === "scissors" && computerChoice === "paper")
  ) {
    console.log("Player win");
  } else {
    console.log("Computer Win");
  }
  playRound(humanSelection, computerSelection);
};

