 console.log("Hello, JS script!")

let humanScore = 0;
let computerScore = 0;
let humanChoice = " ";
let computerChoice = " ";
let randomNumber = Math.floor(Math.random() * 99);  
 
function getComputerChoice () {  
console.log (`The Human score is ${humanScore}.`);
console.log (`The Computer score is ${computerScore}.`);

 if (randomNumber <= 32)  {
    computerChoice = "Rock";
  } else if ( (randomNumber > 32) && (randomNumber <= 65) ) {
    computerChoice = "Paper";
  } else {
    computerChoice = "Scissors";
  }
return computerChoice;
}
//console.log(getComputerChoice());
getComputerChoice();

alert ("Please open the Console to play.");

function getHumanChoice () {
  humanChoice = prompt("Please enter Rock, Paper, or Scissors." );
  return humanChoice;
}
//console.log(getHumanChoice());
getHumanChoice();


function singleRound (computerChoice, humanChoice, humanScore, computerScore) {
if (computerChoice === humanChoice) {
  console.log("It's a tie.");
} else if ( (humanChoice==="Rock") && (computerChoice==="Scissors")) {
  console.log("Human wins the round.");
  humanScore = humanScore + 1;
  console.log (`The Human score is ${humanScore}.`);
} else if ( (humanChoice==="Paper") && (computerChoice==="Rock")) {
  console.log("Human wins the round.");
  humanScore = humanScore + 1;
  console.log (`The Human score is ${humanScore}.`);
} else if ( (humanChoice==="Scissors") && (computerChoice==="Paper")) {
  console.log("Human wins the round.");
  humanScore = humanScore + 1;
  console.log (`The Human score is ${humanScore}.`);
} else {
  console.log("Computer wins the round.");
  computerScore = computerScore + 1;
  console.log (`The Computer's score is ${computerScore}.`);
}
}
singleRound (computerChoice, humanChoice, humanScore, computerScore);
