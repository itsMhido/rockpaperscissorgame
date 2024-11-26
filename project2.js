
const computerMove = function()
{
    const random = Math.random()
    if (random < 1/3) {
        return 'rock'
    }
    if (random < 2/3) {
        return 'paper'
    }
    return 'scissor'
}


const score = {
    wins: 0,
    losses: 0,
    ties: 0
}

const toImage = function(move) {
    return '<img src="images/' +move +'-emoji.png" alt="'+ move +'"></img>'
}

const outcome = document.querySelector(".outcome")
const scoreText = document.querySelector(".scoreText")
const moveImage = document.querySelector(".moveimage")

const typing = {'rock': 'scissor', 'scissor': 'paper', 'paper': 'rock'}

const playGame = function(playerMove) {
    const move = computerMove()
    moveImage.innerHTML = "You " + toImage(playerMove) +" "+ toImage(move) + " compuetr"
    console.log(move)
    if (typing[playerMove] == move) {
        score.wins++;
        outcome.textContent = "you won :D"
    }
    else {
        if (playerMove == move) {
            score.ties ++;
            outcome.textContent = "it was a tie :/"
        }
        else {
            score.losses ++;
            outcome.textContent = "you lost :("
        }
    }
    console.log(score)
    scoreText.textContent = "wins : " + score.wins + ", losses: " + score.losses + ", ties :" + score.ties
}

const resetScore = function() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    scoreText.textContent = "wins : " + score.wins + ", losses: " + score.losses + ", ties :" + score.ties
}


let auto = false;
let id;
const autoPlay = function() {
    auto = !auto
    if (auto) {
        id = setInterval(() => {
            playGame(computerMove())
        },  1);
    }
   else {
        clearInterval(id);
   }
}