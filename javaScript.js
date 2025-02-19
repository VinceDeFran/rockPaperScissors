function start()
{
  alert ("Please enter Ctrl+Shift+J to open the Console and start playing.");
}
start();

window.addEventListener('DOMContentLoaded', () => 
{
  document.querySelector('#button').addEventListener('click', () => 
  {
      let humanScore = 0;
      let computerScore = 0;
      let humanChoice = " ";
      let computerChoice = " ";
      let round = 1;
 
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

      function getHumanChoice () 
      {
        humanChoice = prompt("Please enter Rock, Paper, or Scissors.");
        humanChoice = humanChoice.toUpperCase();
      }
    
      function playRound (getHumanInput, getComputerInput) 
      {
        window.stop();
        console.log (`ROUND ${round}`)

        window.stop();   
        getHumanInput();
        getComputerInput(); 
        console.log(`The Human chose ${humanChoice}.`);
        console.log(`The Computer chose ${computerChoice}.`);      
        window.stop();   

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
          window.stop();           
      }
   
      console.log ("The Game Starts NOW!");
      window.stop();          
    /*playWholeGame (humanScore, computerScore, computerChoice, randomNumber);
      function playWholeGame (humanScore, computerScore, computerChoice, randomNumber) 
      {*/

        //for (let i = 1; i <= 5; i++) 
        //{
          
        //}
        //Removed FOR LOOP and called func 5x

          playRound(getHumanChoice, getComputerChoice);
          playRound(getHumanChoice, getComputerChoice);
          playRound(getHumanChoice, getComputerChoice);
          playRound(getHumanChoice, getComputerChoice);
          playRound(getHumanChoice, getComputerChoice);
      
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
      //}
  });
});