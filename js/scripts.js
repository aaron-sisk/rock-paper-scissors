console.log("Hello World!")

let humanChoice = ""
let computerChoice = ""

function getComputerChoice() {
    let a = Math.random();
    if (a >= 0.66) {
        computerChoice = "Rock"
    }
    else if (a < 0.66 && a > 0.33) {
        computerChoice = "Paper"
    }
    else {
        computerChoice = "Scissors"
    }
    return computerChoice
}

console.log(getComputerChoice())

function getHumanChoice() {
    let humanChoice = window.prompt("Rock, Paper, or Scissors");
    return humanChoice
} 

console.log(getHumanChoice())

let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice) {

}