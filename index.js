function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}

function getHumanChoice() {
  choice = prompt("What do you choose?").toLowerCase();
  if (choice == "rock") {
    return 0;
  } else if (choice == "paper") {
    return 1;
  } else if (choice == "scissors") {
    return 2;
  }
}

let humanScore = 0;
let computerScore =  0;
let humanSelection;
let computerSelection;
function playRound(humanChoice, ComputerChoice) {
  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
//Outcome Algorithm
//Computer Wins
  //Rock vs. Scissors
  if (ComputerChoice == 0 && humanChoice == 2 ) {    
    computerScore++;
    return console.log("You lose! Rock beats scissors")
  //Paper vs. Rock
  } else if (ComputerChoice == 1 && humanChoice == 0) {
    computerScore++;
    return console.log("You lose! Paper beats rock");
  //Scissors vs. Paper
  } else if (ComputerChoice == 2 && humanChoice == 1) {
    computerScore++;
    return console.log("You lose! Scissors beats paper");
  }
//Human wins
  //Scissors vs. Rock
  if (ComputerChoice == 2 && humanChoice == 0 ) {
    humanScore++
    return console.log("You win! Rock beats scissors");
  //Rock vs. Paper
  } else if (ComputerChoice == 0 && humanChoice == 1) {
    humanScore++
    return console.log("You win! Paper beats rock")
  //Paper vs. Scissors
  } else if (ComputerChoice == 1 && humanChoice == 2) {
    humanScore++
    return console.log("You win! Scissors beats paper")
  }

//Draw
  if (ComputerChoice == humanChoice) {
    return console.log("It's a draw! womp womp")
  }
}

function playGame(times) {
  let i = 1
  while(i <= times) {
    playRound(humanSelection, computerSelection);
    console.log(`Humans: ${humanScore}`);
    console.log(`Computers: ${computerScore}`);
    i++;
  }

// Game ends here
  if (humanScore == computerScore) {
    console.log("The Game is over, its a draw")
  } else if (humanScore < computerScore) {
    console.log("The Game is over, you let the AI takeover...")
  } else {
    console.log("AI will never take your job dw, you won!")
  }
}

playGame(5);