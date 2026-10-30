
function getComputerChoice() {
    let number = Math.random();

    if (number < 1/3) {
        return "rock";
    } else if (number < 2/3) {
        return "scissors";
    } else {
        return "paper";
    }
}

function getHumanChoice() {
    let userchoice = prompt("Enter your choice:");
    return userchoice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase();

        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
        }
        else if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log("You Win");
            humanScore++;
        }
        else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log("You Win");
            humanScore++;
        }
        else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log("You Win");
            humanScore++;
        }
        else {
            console.log("You Lost");
            computerScore++;
        }
    }

    const humanSelection1 = getHumanChoice();
    const computerSelection1 = getComputerChoice();

    console.log("Your Choice:", humanSelection1);
    console.log("Computer Choice:", computerSelection1);

    playRound(humanSelection1, computerSelection1);

    console.log("Human Score:", humanScore);
    console.log("Computer Score:", computerScore);


    const humanSelection2 = getHumanChoice();
    const computerSelection2 = getComputerChoice();

    console.log("Your Choice:", humanSelection2);
    console.log("Computer Choice:", computerSelection2);

    playRound(humanSelection2, computerSelection2);

    console.log("Human Score:", humanScore);
    console.log("Computer Score:", computerScore);


    const humanSelection3 = getHumanChoice();
    const computerSelection3 = getComputerChoice();

    console.log("Your Choice:", humanSelection3);
    console.log("Computer Choice:", computerSelection3);

    playRound(humanSelection3, computerSelection3);

    console.log("Human Score:", humanScore);
    console.log("Computer Score:", computerScore);


    const humanSelection4 = getHumanChoice();
    const computerSelection4 = getComputerChoice();

    console.log("Your Choice:", humanSelection4);
    console.log("Computer Choice:", computerSelection4);

    playRound(humanSelection4, computerSelection4);

    console.log("Human Score:", humanScore);
    console.log("Computer Score:", computerScore);


    const humanSelection5 = getHumanChoice();
    const computerSelection5 = getComputerChoice();

    console.log("Your Choice:", humanSelection5);
    console.log("Computer Choice:", computerSelection5);

    playRound(humanSelection5, computerSelection5);

    console.log("Human Score:", humanScore);
    console.log("Computer Score:", computerScore);


    if (humanScore > computerScore) {
        console.log("You Win the Game!");
    }
    else if (humanScore === computerScore) {
        console.log("It's a Tie!");
    }
    else {
        console.log("You Lost the Game!");
    }
}

playGame();
