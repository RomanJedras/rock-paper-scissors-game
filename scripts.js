'use strict';

var output = document.getElementById('output');
var rock_button = document.getElementById('js-playerPick_rock');
var paper_button = document.getElementById('js-playerPick_paper');
var scissors_button = document.getElementById('js-playerPick_scissors');




var playerMove = function(playerPick) {
    output.innerHTML = playerPick;
    var computerPlayer, messages;
    computerPlayer = getComputerPick();

   var gameWinner  = checkRoundWinner(playerPick, computerPlayer);
   if (gameWinner != 'noone' && gameWinner == 'computer') {
       messages = 'You Won '+ gameWinner + ' played: ' + computerPlayer + ' and player played :' +playerPick;
   } else if (gameWinner != 'noone' && gameWinner == 'player') {
       messages = 'You Won '+ gameWinner + ' played: ' + playerPick + ' and computer played :' + computerPlayer;
   }else {
       messages = 'Nobody Winner !!';
   }
    return output.innerHTML = messages;
}

var random = function() {
    return Math.floor(Math.random()*3);
}

var getComputerPick = function() {
    var randomPick = random();
    var possiblePicks;
    if (randomPick == 1) {
       possiblePicks = 'paper';
    } else if (randomPick == 2) {
        possiblePicks = 'rock';
    }else {
        possiblePicks = 'scissors';
    }
    return possiblePicks;
    }

var checkRoundWinner = function(playerPick, computerPick) {

    var winnerIs = 'player';

    if (playerPick == computerPick) {
        return winnerIs = 'noone';
    } else if (
        (computerPick == 'rock' &&  playerPick == 'scissors') ||
        (computerPick == 'scissors' &&  playerPick == 'paper') ||
        (computerPick == 'paper' &&  playerPick == 'rock')) {
        return winnerIs = 'computer';
    }

    if (winnerIs == 'player') {
       return winnerIs;
    }


}


rock_button.addEventListener('click', function () {
    playerMove(this.name)
});

paper_button.addEventListener('click', function () {
    playerMove(this.name)
});

scissors_button.addEventListener('click', function () {
    playerMove(this.name)
});




