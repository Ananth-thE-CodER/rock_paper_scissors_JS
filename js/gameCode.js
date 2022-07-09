function computerPlay() {
    let allhand = ['ROCK', 'PAPER', 'SCISSOR']
    comphand = allhand[Math.floor(Math.random()*allhand.length)];
    console.log("Comp Hand: ", comphand)
    return comphand
}

function playerplay() {
    let playerhand = prompt("Enter your hand...\nRock, Paper or Scissor. Which is it?")
    return playerhand.toUpperCase();
    // if (playerhand.toUpperCase() == 'ROCK' || playerhand.toUpperCase() == 'PAPER' || playerhand.toUpperCase() == 'SCISSORS') {

    // }
}

function playRound(playerhand = playerplay(), comphand = computerPlay()) {
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
    for (let i=0; i<=5; i++) {
        winner = playRound();
        score[winner] += 1;
    }
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