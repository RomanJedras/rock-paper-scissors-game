'use strict';

var output = document.getElementById('output');
var rock_button = document.getElementById('js-playerPick_rock');
var paper_button = document.getElementById('js-playerPick_paper');
var scissors_button = document.getElementById('js-playerPick_scissors');
var newGameButton = document.getElementById('newgameButton');
/*Add elment result */
var pickElem = document.getElementById('playerPickElement'),
    resultsElem = document.getElementById('results');
/*Add elment player Name && points */
var playerPointsElem = document.getElementById('playerPoints'),
    playerNameElem = document.getElementById('playerName'),
    computerPointsElem = document.getElementById('computerPoints');
/*Add element Choose && Result*/
var playerPickElem = document.getElementById('playerPick');
var computerPickElem = document.getElementById('computerPick');
var playerResultElem = document.getElementById('playerResult');
var computerResultElem = document.getElementById('computerResult');
    pickElem.style.display = 'block';
    resultsElem.style.display = 'none';

let gameState = 'notStarted',  //started // ended //notStarted
    player = {
        name: '',
        score: 0
    },
    computer = {
        score: 0
    };

var setGameElements = function() {
    if (gameState === 'started') {
        pickElem.style.display = 'block';
        resultsElem.style.display = 'block';

    } else if (gameState === 'ended') {
        newGameButton.innerHTML = 'One again';
    } else {
        pickElem.style.display = 'block';
        resultsElem.style.display = 'none';
    }
}

setGameElements();

let newPlay = function(playerPick) {

    player.name = prompt('Player, please pass your name', 'Player Name');
    if (player.name) {
        player.score = computer.score = 0;
        gameState = 'started';
        setGameElements();
        playerMove(playerPick);
        playerNameElem.innerHTML = player.name;
    }
}

let random = function() {
    return Math.floor(Math.random()*3);
};
const getComputerPick = function() {
    let randomPick = random();
    let possiblePicks;
    if (randomPick === 1) {
        possiblePicks = 'paper';
    } else if (randomPick === 2) {
        possiblePicks = 'rock';
    }else {
        possiblePicks = 'scissors';
    }
    return possiblePicks;
}

const playerMove = function (playerPick) {
    const computerPick = getComputerPick();
    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;
    checkRoundWinner(playerPick, computerPick);
    endGame();
    setGameElements();
    setGamePoints();
};

function checkRoundWinner (playerPick, computerPick) {
    playerResultElem.innerHTML = computerResultElem.innerHTML = '';
    let winnerIs = 'player';
    if (playerPick === computerPick) {
        winnerIs = 'none'; //remis
    } else if (computerPick === 'rock' && playerPick === 'scissors' || computerPick === 'scissors' && playerPick === 'paper') {
        winnerIs = 'computer';
    } else if (computerPick === 'paper' && playerPick === 'rock') {
        winnerIs = 'computer';
    }
    if (winnerIs === 'player') {
        playerResultElem.innerText = 'Player Winner!';
        player.score++;
    }
    else if (winnerIs === 'computer') {
        computerResultElem.innerText = 'Computer Winner!';
        computer.score++;
    }
    else {
        computerResultElem.innerText = 'DRAW!';
        playerResultElem.innerText = 'DRAW!';
    }
}
//set Game Points

function setGamePoints() {
    playerPointsElem.innerText = player.score;
    computerPointsElem.innerText = computer.score;
    console.log(player.score, computer.score);
}

// KONIEC

function endGame() {
    if (player.score === 10) {
        alert('WIN');
        gameState = 'ended';
        computer.score = player.score = 0;
        playerResultElem.innerHTML = 'Player score';
        computerResultElem.innerHTML = 'Computer score';
        playerPickElem.innerHTML = 'Player Selection';
        computerPickElem.innerHTML = 'Computer Score';

    } else if (computer.score === 10) {
        alert('Computer win');
        gameState = 'ended';
        computer.score = player.score = 0;
        playerResultElem.innerHTML = 'Player Score';
        computerResultElem.innerHTML = 'Computer Score';
        playerPickElem.innerHTML = 'Player Selection';
        computerPickElem.innerHTML = 'Computer Selection';

    }
    setGamePoints();
}


rock_button.addEventListener('click', function(event){
    newPlay(this.name);
});

paper_button.addEventListener('click',function(){
    newPlay(this.name)
});

scissors_button.addEventListener('click',function(){
    newPlay(this.name);
});


