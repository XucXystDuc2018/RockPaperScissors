function getComputerChoice(){
    let array = ["Rock", "Paper", "Scissors"];
    return array[Math.floor(Math.random()* array.length)];
}

function compareRock(computerSelection){
    switch (computerSelection) {
        case "scissors":
            return 1;
        case "paper":
            return 0;
        case "rock":
            return 2;
        default:
            console.log("Your input is invalid!");
    }
}

function compareScissors(computerSelection){
    switch (computerSelection) {
        case "scissors":
            return 2;
        case "paper":
            return 1;
        case "rock":
            return 0;
        default:
            console.log("Your input is invalid!");
    }
}

function comparePaper(computerSelection){
    switch (computerSelection) {
        case "scissors":
            return 0;
        case "paper":
            return 2;
        case "rock":
            return 1;
        default:
            console.log("Your input is invalid!");
    }
}

function playRound(playerSelection, computerSelection){
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    let result;
    switch (player){
        case "rock":
            result = compareRock(computer);
            break;
        case "paper":
            result = comparePaper(computer);
            break;
        case "scissors":
            result = compareScissors(computer);
            break;
        default:
    }
    
    return result;

}

function playGame(){
    let playerScore = 0, computerScore = 0;
    for (let i = 0; i < 5; i++){
        let playerSelection = prompt("Rock, paper scissors SHOOT!");
        let computerSelection = getComputerChoice();
        if (playerSelection !== null && playerSelection !== ''){
            let result = playRound(playerSelection, computerSelection);
            if (result === 1){
                console.log(`You win! ${playerSelection} beats ${computerSelection}`);
                playerScore++;
            } else if (result === 0){
                console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
                computerScore++;
            } else if (result === 2){
                console.log(`Draw! You both chose ${playerSelection}`);
            }
        } else {
            console.log("You have to enter your choice!");
            return;
        }
    }
    if (playerScore > computerScore){
        console.log("WON! The result is " + playerScore + ":" + computerScore);
    } else if (playerScore < computerScore){
        console.log("LOST! The result is " + playerScore + ":" + computerScore);
    } else if (playerScore === computerScore){
        console.log("DRAW! The result is " + playerScore + ":" + computerScore);
    }
}

playGame();