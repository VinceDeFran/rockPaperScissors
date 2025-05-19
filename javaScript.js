let humanScore = 0;
let computerScore = 0;
let humanChoice = " ";
let computerChoice = "0";
let round = 1;

//Create a clone of the original DOM
const originalDOM = document.body.cloneNode(true);


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
  if (event.target.tagName === 'BUTTON') 
  {
    // Handle any button click
    if (round < 6) {
      playRound (humanChoice, getComputerChoice);
      } else {
        // Reset the DOM
        document.body.innerHTML = originalDOM.innerHTML;
        // Reset the Score
        humanScore = 0;
        computerScore = 0;
        computerChoice = "0";
        round = 1;

        playRound (humanChoice, getComputerChoice); 
      }  
  }
});


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
  // Select the .item1 element to add results to .container1.
  const item1Div = document.querySelector('.item1');

  // Get the parent of .item1 (should be .container1)
  const containerDiv = item1Div.parentElement;
      
  getComputerInput(); 

  //console.log(`The Human chose ${humanChoice}.`);
  //console.log(`The Computer chose ${computerChoice}.`);      

  // Create a new div element to add the results of the round to the DOM.
  const newDiv = document.createElement('div');
  newDiv.textContent = `ROUND ${round}.  The Human chose ${humanChoice}.  The Computer chose ${computerChoice}.`;
  newDiv.classList.add('item1');
  // Insert the new div after .container1 in the DOM
  containerDiv.appendChild(newDiv);

  if (computerChoice === humanChoice) 
  {
    //console.log(`${humanChoice} on ${computerChoice}.`);
    //console.log("It's a tie.");
    //console.log (`The Human's score is ${humanScore}.`);
    //console.log (`The Computer's score is ${computerScore}.`);

    // Create a new div element to add the results of the round to the DOM.
    const newDiv = document.createElement('div');
    newDiv.textContent = `${humanChoice} on ${computerChoice}.  It's a tie.  The Human's score is ${humanScore}.  The Computer's score is ${computerScore}.`;
    newDiv.classList.add('item1');
    // Insert the new div after .container1 in the DOM
    containerDiv.appendChild(newDiv);

    } 
    else if ( (humanChoice==="ROCK") && (computerChoice==="SCISSORS")) 
    {

    humanScore = humanScore + 1;

    //console.log("Human wins the round.");
    //console.log(`${humanChoice} beats ${computerChoice}!`);
    //console.log (`The Human's score is ${humanScore}.`);
    //console.log (`The Computer's score is ${computerScore}.`);

    // Create a new div element to add the results of the round to the DOM.
    const newDiv = document.createElement('div');
    newDiv.textContent = `Human wins the round.  ${humanChoice} beats ${computerChoice}!  The Human's score is ${humanScore}.  The Computer's score is ${computerScore}.`;
    newDiv.classList.add('item1');
    // Insert the new div after .container1 in the DOM
    containerDiv.appendChild(newDiv);
    } 
    else if ( (humanChoice==="PAPER") && (computerChoice==="ROCK")) 
    {

    humanScore = humanScore + 1;

    //console.log("Human wins the round.");
    //console.log(`${humanChoice} beats ${computerChoice}!`);
    //console.log (`The Human's score is ${humanScore}.`);
    //console.log (`The Computer's score is ${computerScore}.`);

    // Create a new div element to add the results of the round to the DOM.
    const newDiv = document.createElement('div');
    newDiv.textContent = `Human wins the round.  ${humanChoice} beats ${computerChoice}!  The Human's score is ${humanScore}.  The Computer's score is ${computerScore}.`;
    newDiv.classList.add('item1');
    // Insert the new div after .container1 in the DOM
    containerDiv.appendChild(newDiv);
    } 
    else if ( (humanChoice==="SCISSORS") && (computerChoice==="PAPER")) 
    {

    humanScore = humanScore + 1;

    //console.log("Human wins the round.");
    //console.log(`${humanChoice} beats ${computerChoice}!`);
    //console.log (`The Human's score is ${humanScore}.`);
    //console.log (`The Computer's score is ${computerScore}.`);

    // Create a new div element to add the results of the round to the DOM.
    const newDiv = document.createElement('div');
    newDiv.textContent = `Human wins the round.  ${humanChoice} beats ${computerChoice}!  The Human's score is ${humanScore}.  The Computer's score is ${computerScore}.`;
    newDiv.classList.add('item1');
    // Insert the new div after .container1 in the DOM
    containerDiv.appendChild(newDiv);
    } 
    else 
    {
    computerScore = computerScore + 1;

    //console.log(`${computerChoice} beats ${humanChoice}!`);
    //console.log("Computer wins the round.");
    //console.log (`The Computer's score is ${computerScore}.`);
    //console.log (`The Human's score is ${humanScore}.`);

    // Create a new div element to add the results of the round to the DOM.
    const newDiv = document.createElement('div');
    newDiv.textContent = `${computerChoice} beats ${humanChoice}!  Computer wins the round.  The Human's score is ${humanScore}.  The Computer's score is ${computerScore}.`;
    newDiv.classList.add('item1');
    // Insert the new div after .container1 in the DOM
    containerDiv.appendChild(newDiv);
  }

  if (round === 5) 
  {
    if (humanScore > computerScore) 
    {
      //console.log (`Human has destroyed the box of wires by a score of ${humanScore} to ${computerScore}!!!`);

      // Create a new div element to the DOM to declare the winner.
      const newDiv = document.createElement('div');
      newDiv.textContent = `Human has destroyed the box of wires by a score of ${humanScore} to ${computerScore}!!!     Select any button if you want to play again.`;
      newDiv.classList.add('item1');
      // Insert the new div after .container1 in the DOM
      containerDiv.appendChild(newDiv);
      } else if (computerScore > humanScore) 
      {
      //  console.log (`Puny human must pay homage to Computer Overloard for losing ${computerScore} rounds to ${humanScore}!!!`);

      // Create a new div element to the DOM to declare the winner.
      const newDiv = document.createElement('div');
      newDiv.textContent = `Puny human must pay homage to Computer Overloard for losing ${computerScore} rounds to ${humanScore}!!!    Select any button if you want to play again.`;
      newDiv.classList.add('item1');
      // Insert the new div after .container1 in the DOM
      containerDiv.appendChild(newDiv);
      } else
      {
      //console.log ("There can be no peace. A tie is unacceptable. Play again.")

      // Create a new div element to the DOM to declare the winner.
      const newDiv = document.createElement('div');
      newDiv.textContent = `There can be no peace. A tie is unacceptable.    Select any button if you want to play again.`;
      newDiv.classList.add('item1');
      // Insert the new div after .container1 in the DOM
      containerDiv.appendChild(newDiv);
    }   

    // Create a new div element to add the results of the round to the DOM.
    const newDiv = document.createElement('div');
    newDiv.textContent = `PRESS ANY BUTTON TO PLAY AGAIN`;
    newDiv.classList.add('item1');
    // Insert the new div after .container1 in the DOM
    containerDiv.appendChild(newDiv);
  } 
  round = round + 1;  
}