const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay"); 
const playerScore = document.getElementById("playerScore"); 
const computerScore = document.getElementById("computerScore");

let playerPoint = 0;
let computerPoint= 0;



function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let result;

    if(playerChoice === computerChoice){
        result = "It's a TIE";
    }else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissors") ? "You Win!" : "You Lose!";
                break;
            
                case "paper":
                result = (computerChoice === "rock") ? "You Win!" : "You Lose!";
                break;

                case "scissors":
                result = (computerChoice === "paper") ? "You Win!" : "You Lose!";
                break;
        }
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greentext", "redtext");

    switch(result){
        case "You Win!":
            resultDisplay.classList.add("greentext");
            playerPoint++;
            playerScore.textContent = playerPoint;
            break;


        case "You Lose!":
            resultDisplay.classList.add("redtext");
            computerPoint++
            computerScore.textContent = computerPoint;
            break;
    }
}