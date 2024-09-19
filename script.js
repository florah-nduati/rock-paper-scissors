const choices=["rock", "paper", "scissors"];
const playerDisplay=document.getElementById("playerDisplay"); 
const computerDisplay=document.getElementById("computerDisplay"); 
const resultDisplay=document.getElementById("resultDisplay"); 
const playerEmoji = document.querySelector(".player");
const computerEmoji = document.querySelector(".computer");



let playerScore = 0;
let computerScore = 0;
const playerScoreDisplay = document.getElementById("playerScore");
const computerScoreDisplay = document.getElementById("computerScore");

const emojis = {
    rock: "✊",
    paper: "✋",
    scissors: "✌️"
};


function playGame(playerChoice){
    const computerChoice=choices[Math.floor(Math.random() *3)];

    let result="";
    if(playerChoice=== computerChoice){
        result="draw"
    }
    else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "Player wins!";
        playerScore++;
    } 

    else {
        result = "Computer wins!";
        computerScore++; 
    }


    playerEmoji.textContent = emojis[playerChoice];
    computerEmoji.textContent = emojis[computerChoice];

    resultDisplay.textContent =result;

    playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;

}