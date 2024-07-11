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
        return "Scisscors"
    }
}

console.log(getComputerChoice())