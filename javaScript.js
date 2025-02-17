 //console.log("Hello, JS script!")

let humanScore = 0;
let computerScore = 0;
let humanChoice = " ";
let computerChoice = " ";
let randomNumber = Math.floor(Math.random() * 99);  

function start(){
  alert ("Please enter Ctrl+Shift+J to open the Console and start playing.");
}
start();
 
function getComputerChoice () {  
console.log (`The Human score is ${humanScore}.`);
console.log (`The Computer score is ${computerScore}.`);

 if (randomNumber <= 32)  {
    computerChoice = "ROCK";
  } else if ( (randomNumber > 32) && (randomNumber <= 65) ) {
    computerChoice = "PAPER";
  } else {
    computerChoice = "SCISSORS";
  }
return computerChoice;
}
//console.log(getComputerChoice());
getComputerChoice();



function getHumanChoice () {
  humanChoice = prompt("Please enter Rock, Paper, or Scissors.");
  humanChoice = humanChoice.toUpperCase();
  return humanChoice;
}
//console.log(getHumanChoice());
getHumanChoice();


function singleRound (computerChoice, humanChoice, humanScore, computerScore) {
if (computerChoice === humanChoice) {
  console.log(`${humanChoice} on ${computerChoice}.`);
  console.log("It's a tie.");
} else if ( (humanChoice==="ROCK") && (computerChoice==="SCISSORS")) {
  console.log("Human wins the round.");
  console.log(`${humanChoice} beats ${computerChoice}!`);
  humanScore = humanScore + 1;
  console.log (`The Human score is ${humanScore}.`);
} else if ( (humanChoice==="PAPER") && (computerChoice==="ROCK")) {
  console.log("Human wins the round.");
  console.log(`${humanChoice} beats ${computerChoice}!`);
  humanScore = humanScore + 1;
  console.log (`The Human score is ${humanScore}.`);
} else if ( (humanChoice==="SCISSORS") && (computerChoice==="PAPER")) {
  console.log("Human wins the round.");
  console.log(`${humanChoice} beats ${computerChoice}!`);
  humanScore = humanScore + 1;
  console.log (`The Human score is ${humanScore}.`);
} else {
  console.log(`${computerChoice} beats ${humanChoice}!`);
  console.log("Computer wins the round.");
  computerScore = computerScore + 1;
  console.log (`The Computer's score is ${computerScore}.`);
}
}
singleRound (computerChoice, humanChoice, humanScore, computerScore);


