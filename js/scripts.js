console.log("Hello World!")

function getComputerChoice() {
    let a = Math.random();
    if (a >= 0.66) {
        return "Rock"
    }
    else if (a < 0.66 && a > 0.33) {
        return "Paper"
    }
    else {
        return "Scissors"
    }
}

console.log(getComputerChoice())

function getHumanChoice() {
    let humanChoice = window.prompt("Rock, Paper, or Scissors");
    return humanChoice
} 

console.log(getHumanChoice())

let humanScore = 0

let computerScore = 0

