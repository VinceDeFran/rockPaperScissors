let humanScore = 0;
let computerScore = 0;
let humanChoice = " ";
let computerChoice = "0";
let round = 1;


const rockButton = document.querySelector("#rockButton");
rockButton.addEventListener("click", throwRock);
function throwRock() 
{  
  humanChoice = "ROCK";
  return humanChoice;
}

const paperButton = document.querySelector("#paperButton");
paperButton.addEventListener("click", throwPaper);
function throwPaper() 
{  
  humanChoice = "PAPER";
  return humanChoice;
}

const scissorsButton = document.querySelector("#scissorsButton");
scissorsButton.addEventListener("click", throwScissors);
function throwScissors() 
{  
  humanChoice = "SCISSORS";
  return humanChoice;
}

document.addEventListener('click', function(event) {
  if (event.target.tagName === 'BUTTON') {
    // Handle any button click
    playRound (humanChoice, getComputerChoice);
  }
});


/*

function start()
{
  alert ("Please enter Ctrl+Shift+J to open the Console and start playing.");
}
start();

window.addEventListener('DOMContentLoaded', () => 
{
  document.querySelector('#button').addEventListener('click', () => 
  {
    */

    function getComputerChoice () 
    { 
      let randomNumber = Math.floor(Math.random() * 99);  
      if (randomNumber <= 32)  
      {
        computerChoice = "ROCK";
      } else if ( (randomNumber > 32) && (randomNumber <= 65) ) 
        {
          computerChoice = "PAPER";
      } else 
        {
          computerChoice = "SCISSORS";
      }
    }


  
    function playRound (humanChoice, getComputerInput) 
    {
      
      console.log (`ROUND ${round}`)

      
      getComputerInput(); 
      console.log(`The Human chose ${humanChoice}.`);
      console.log(`The Computer chose ${computerChoice}.`);      


      if (computerChoice === humanChoice) 
      {
        console.log(`${humanChoice} on ${computerChoice}.`);
        console.log("It's a tie.");
        console.log (`The Human's score is ${humanScore}.`);
        console.log (`The Computer's score is ${computerScore}.`);
        } 
        else if ( (humanChoice==="ROCK") && (computerChoice==="SCISSORS")) 
        {
          console.log("Human wins the round.");
          console.log(`${humanChoice} beats ${computerChoice}!`);
          humanScore = humanScore + 1;
          console.log (`The Human's score is ${humanScore}.`);
          console.log (`The Computer's score is ${computerScore}.`);
        } 
        else if ( (humanChoice==="PAPER") && (computerChoice==="ROCK")) 
        {
          console.log("Human wins the round.");
          console.log(`${humanChoice} beats ${computerChoice}!`);
          humanScore = humanScore + 1;
          console.log (`The Human's score is ${humanScore}.`);
          console.log (`The Computer's score is ${computerScore}.`);
        } 
        else if ( (humanChoice==="SCISSORS") && (computerChoice==="PAPER")) 
        {
            console.log("Human wins the round.");
            console.log(`${humanChoice} beats ${computerChoice}!`);
            humanScore = humanScore + 1;
            console.log (`The Human's score is ${humanScore}.`);
            console.log (`The Computer's score is ${computerScore}.`);
        } 
        else 
        {
            console.log(`${computerChoice} beats ${humanChoice}!`);
            console.log("Computer wins the round.");
            computerScore = computerScore + 1;
            console.log (`The Computer's score is ${computerScore}.`);
            console.log (`The Human's score is ${humanScore}.`);
      }

        console.log (" "); 
        round = round + 1;  
    }
  
/*
    function playGame (humanThink, computerThink, playOnce) 
    {
      console.log ("The Game Starts NOW!");
      window.stop();          

      for (let i = 1; i <= 5; i++) 
      {
        playOnce(humanThink, computerThink);
      }
     
      if (humanScore > computerScore) 
      {
        console.log (`Human has destroyed the box of wires by a score of ${humanScore} to ${computerScore}!!!`);
        } else if (computerScore > humanScore) 
        {
          console.log (`Puny human must pay homage to Computer Overloard for losing ${computerScore} rounds to ${humanScore}!!!`);
        } else
        {
          console.log ("There can be no peace. A tie is unacceptable. Play again.")
      }
      console.log (" "); 
      console.log ("Press the button again to start a new game.")
      console.log (" "); 
      console.log (" "); 
    }
      */

 //   playGame (getHumanChoice, getComputerChoice, playRound);

/*   Page start... from before moving script tag to the end.    
  });
});

*/