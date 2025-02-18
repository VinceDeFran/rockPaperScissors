# rockPaperScissors
Foundations Course, first JavaScript Project

PLAN
Broke down the assignment steps to the following psuedo code.  Will write code for each step one at a time and test it out before moving to the next step.

1) Write a function that randomly returns “rock”, “paper” or “scissors”.************************************************
getComputerChoice {    
computerChoice = random(one of three “rock”, “paper” or “scissors”.)
return computerChoice
}
console.log(getComputerChoice())
********************************************************************************************************************

2)  Write a function that takes the user choice and returns it.  ****************************************************************
getHumanChoice {    
humanChoice = prompt(one of three “rock”, “paper” or “scissors”.)
return humanChoice
}
console.log(getHumanChoice())
********************************************************************************************************************

3) Declare the players score variables  ****************************************************************
Create two new variables named humanScore and computerScore in the global scope.
Initialize those variables with the value of 0.
********************************************************************************************************************

4) Write the logic to play a single round  ****************************************************************
round (getComputerChoice, getHumanChoice) {
if human = computer, "It is a tie." / exit
if human rock and computer scissor, "Human wins the round." / humanScore +1
else if human papper and computer rock, "Human wins the round." /  humanScore +1
else if human scissor and computer papper, "Human wins the round." /  humanScore +1
else "Computer wins the round." / computerScore +1
return humanScore computerScore
}
console.log(`Human's score is $humanScore, and the Computer's score is $computerScore.`)
*****************************************************************************************

5) Improve the User Interface
****************************************************************
Make humanChoice case-insensitive.  
Console.log detailed round winner messages.
Improve the console message.
********************************************************************************


Step 6: Write the logic to play the entire game
****************************************************************
Play 5 rounds. 
Write a function named playGame that calls playRound .
Keeps track of the scores and declares a winner at the end.

Create a new function named playGame.
Move your playRound function and score variables so that they’re declared inside of the new playGame function
Play 5 rounds by calling playRound 5 times.
Hint: When you assign a function call to a variable, the return value of that function is assigned to the variable. Accessing the variable afterward will only provide the assigned value; it doesn’t recall the function. You need to recall the choice functions to get new choices for each round.