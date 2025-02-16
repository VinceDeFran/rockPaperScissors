 console.log("Hello, JS script!")
 
function getComputerChoice () {  
let randomNumber = Math.floor(Math.random() * 999999999);  
let computerChoice = "none";

 if (randomNumber <= 333333332)  {
    computerChoice = "rock";
  } else if ( (randomNumber > 333333332) && (randomNumber <= 666666665) ) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
return computerChoice
}
console.log(getComputerChoice());
