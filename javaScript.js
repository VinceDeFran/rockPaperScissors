 //console.log("Hello, JS script!")
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
 


/*      function getHumanChoice (humanChoice) 
      {
        humanChoice = prompt("Please enter Rock, Paper, or Scissors.");
        humanChoice = humanChoice.toUpperCase();
        return humanChoice;
      }
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
        return computerChoice;
      }

    /*playWholeGame (humanScore, computerScore, computerChoice, randomNumber);
      function playWholeGame (humanScore, computerScore, computerChoice, randomNumber) 
      {*/
        console.log ("The Game Starts NOW!");
        window.stop();          

        for (let i = 1; i <= 5; i++) 
        {
          console.log (`ROUND ${i}`)
          //console.log (`The Human's score is ${humanScore}.`);
          //console.log (`The Computer score is ${computerScore}.`);

          getComputerChoice(computerChoice);
          //console.log(`The Computer chose ${computerChoice}.`);

          //getHumanChoice(humanChoice);

          humanChoice = prompt("Please enter Rock, Paper, or Scissors.");
          humanChoice = humanChoice.toUpperCase();
          console.log(`The Human chose ${humanChoice}.`);
          console.log(`The Computer chose ${computerChoice}.`);

          window.stop();          

            //function singleRound (computerChoice, humanChoice, humanScore, computerScore) 
            //{
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
              //return [humanScore, computerScore, computerChoice, humanChoice]
              //}
              //singleRound (computerChoice, humanChoice, humanScore, computerScore);  
              console.log (" "); 
              window.stop();           
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
      //}
  });
});