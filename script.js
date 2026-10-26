function getComputerChoice(){
let number = Math.random();
if (number < 1/3) {
    return "Rock";
} else if (number < 2/3) {
    return "Scissors";
} else {
    return "Paper";
}
}
console.log(getComputerChoice());
