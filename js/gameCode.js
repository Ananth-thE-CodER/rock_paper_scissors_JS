function computerPlay() {
    let allhand = ['ROCK', 'PAPER', 'SCISSOR']
    comphand = allhand[Math.floor(Math.random()*allhand.length)];
    console.log("Comp Hand: ", comphand)
    return comphand
}

function playerplay(clickedButton) {
    //let playerhand = prompt("Enter your hand...\nRock, Paper or Scissor. Which is it?")
    playerhand = clickedButton
    //console.log(this)
    return playerhand.toUpperCase();
    // if (playerhand.toUpperCase() == 'ROCK' || playerhand.toUpperCase() == 'PAPER' || playerhand.toUpperCase() == 'SCISSORS') {

    // }
}

function playRound(playerhand, comphand) {
    let winner = ''
    if (playerhand == 'ROCK' || playerhand == 'PAPER' || playerhand == 'SCISSOR') {
        if (playerhand == 'ROCK' && comphand == 'PAPER') {
            winner = 'comp';
        }    
        else if (playerhand == 'PAPER' && comphand == 'SCISSOR') {
            winner = 'comp';
        }
        else if (playerhand == 'SCISSOR' && comphand == 'ROCK') {
            winner = 'comp'
        }
        else if (playerhand == comphand) {
            winner = 'NO ONE!'
        }
        else {
            winner = 'player'
        }
        return winner;
    }
    else {
        alert("Please enter a valid choice...")
        playRound();
    }
}

function game() {
    let score = {'player': 0, 'comp': 0, 'NO ONE!': 0};
    let winner = '';
    //for (let i=0; i<=5; i++) {
    winner = playRound();
    score[winner] += 1;
    //}
    if (score['player'] > score['comp']) {
        console.log("YOU'RE THE WINNER !!")
    }
    else if (score['player'] < score['comp']){
        console.log("SORRY YOU LOST")
    }
    else {
        console.log("IT'S A TIE")
    }
}

// PART-2

function updateScore(winner) {
    let playerScore = document.getElementById('player-score')
    let compScore = document.getElementById('comp-score')
    if (winner == 'player') {
        playerScore.textContent = parseInt(playerScore.innerText) + 1;

    }
    else {
        compScore.textContent = parseInt(compScore.innerText) + 1;
    }
    if (playerScore.innerText >= 5) {
        alert("You WIN!!!")
        resetGame();
    }
    if (compScore.innerText >= 5) {
        alert("You LOSE...")
        resetGame();
    }
    
}

function resetGame() {
    let playerScore = document.getElementById('player-score')
    let compScore = document.getElementById('comp-score')
    playerScore.innerText = 0;
    compScore.innerText = 0;
}

const handButtons = Array.from(document.querySelectorAll(".buttons-container .buttons-div .play-button"))
//console.log(handButtons)
handButtons.forEach(key => key.addEventListener('click', function(e) {
    updateScore(playRound(playerhand = playerplay(e.target.innerText), comphand = computerPlay()))
}))