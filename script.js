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
    let player = playerSelection;
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
            return;
    }
    
    return result;

}

const btns = document.querySelector('#btns');
const gameResult = document.querySelector('#result');
const choices = document.querySelector("#choice");
const scoreBoard = document.querySelector("#score");
const retryBtn = document.querySelector("#retry-btn");

let playerScore = 0, computerScore = 0;

function playGame(){
    scoreBoard.textContent = `Player Score: ${playerScore}, Computer Score: ${computerScore}`;

    btns.addEventListener('click', (event) => {
        if (playerScore >= 5 || computerScore >= 5) {
            return; // Stop further play once a player reaches 5 points
        }

        let playerSelection;
        let computerSelection;
        let result;
        let target = event.target;
        switch(target.id) {
            case 'rock-btn':
                playerSelection = "rock";
                computerSelection = getComputerChoice();
                result = playRound(playerSelection, computerSelection);
                choices.textContent = `Your choice: ${playerSelection}, computer choice: ${computerSelection}`;
                break;
            case 'paper-btn':
                playerSelection = "paper";
                computerSelection = getComputerChoice();
                result = playRound(playerSelection, computerSelection);
                choices.textContent = `Your choice: ${playerSelection}, computer choice: ${computerSelection}`;
                break;
            case 'scissors-btn':
                playerSelection = "scissors";
                computerSelection = getComputerChoice();
                result = playRound(playerSelection, computerSelection);
                choices.textContent = `Your choice: ${playerSelection}, computer choice: ${computerSelection}`;
                break;
        }

        if (result === 1){
            gameResult.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
            playerScore++;
        } else if (result === 0){
            gameResult.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
            computerScore++;
        } else if (result === 2){
            gameResult.textContent = `Draw! You both chose ${playerSelection}`;
        }
        
        scoreBoard.textContent = `Player Score: ${playerScore}, Computer Score: ${computerScore}`;

        if (playerScore === 5) {
            gameResult.textContent = `Congratulations! You win the game with a score of ${playerScore} to ${computerScore}`;
        } else if (computerScore === 5) {
            gameResult.textContent = `Sorry! The computer wins the game with a score of ${computerScore} to ${playerScore}`;
        }
    });
}

retryBtn.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    gameResult.textContent = "";
    choices.textContent = "";
    scoreBoard.textContent = "";
})

playGame();
//I know this coding is really bad with little to no reusable code, but hey it's one of my first project
//just need to make sure not to reuse the playGame() function multiple times if you were to modify the code
// or else the eventlistener inside would just multiply