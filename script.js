// console.log("Hello, World!");
// let n = 5;
// let f = 0;
// console.log(n/f);

// let name = "eyoal";
// let age = 21;

// console.log(`My name is ${name} and i am ${age} years old`)


const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

function computerChoice() {
    const computerChoice = Math.floor(Math.random()*3);
    if (computerChoice === 0) {
        return "rock";  
    } 
    else if (computerChoice === 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}
let playerScore = 0;
let computerScore = 0;
let round = 1;
function playerChoice(choice) {
    const computer = computerChoice();
    const result = determineWinner(choice, computer);
    if (result === "You win!") {
        playerScore++;
    } else if (result === "Its a tie!") {
        // No score change
    } else {
        computerScore++;
    }
    alert (`Round ${round}\nYou chose: ${choice}\n Computer chose: ${computer}\n and the winner is ${result}` );
    round++;
}

function determineWinner(playerChoice, computerChoice){
    if (playerChoice === computerChoice){
        return "Its a tie!";
    }
    else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ){
        return "You win!";
    }
    else{
        return "You lose!";
    }
}

rockBtn.addEventListener('click', () => playerChoice('rock'));
paperBtn.addEventListener('click',() => playerChoice('paper'));
scissorsBtn.addEventListener('click', () => playerChoice('scissors'));