function randomNumber(n = 3) {

    let computerNumber;

    computerNumber = Math.floor(Math.random() * n);

    return computerNumber
}

function computerPlay() {

    let computerDecision;
    let randomPick;

    randomPick = randomNumber();

    switch (randomPick) {
        case 0:
            computerDecision = 'rock';
            break;
        case 1:
            computerDecision = 'paper';
            break;
        case 2:
            computerDecision = 'scissor';
            break;
    }

    return computerDecision
}

function userPlay() {

    let userDecision;

    userDecision = prompt('Please choose either ROCK, PAPER or SCISSOR??');
    userDecision = userDecision.toLowerCase();

    return userDecision
}

function playRound(playerSelection = userPlay(), computerSelection = computerPlay()) {

    let player = playerSelection;
    let computer = computerSelection;
    let result;

    if (player == 'rock' && computer == 'scissor') {
        result = 'You Win! Rock beats Scissor'
    } else if (player == 'rock' && computer == 'paper') {
        result = 'You Lose! Paper beats Rock'
    } else {
        result = 'Rock vs Rock...DRAW !!'
    }

    console.log(result);
    return result;
}

function game() {
    for (let i = 1; i <= 5; i++) {

        let msg = `Round ${i}`
        alert(msg);

        playRound()
    }
}