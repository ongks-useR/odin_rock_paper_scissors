const playerSelection = document.querySelectorAll('button');

playerSelection.forEach(btn => btn.addEventListener('click', function (e) {
    const user = e.target.id;
    let computer = Math.floor(Math.random() * 3);

    if (computer === 0) {
        computer = 'rock';
    }
    else if (computer === 1) {
        computer = 'paper';
    }
    else {
        computer = 'scissor';
    }

    const final = document.querySelector('#result');
    const playerImg = document.querySelector('#player-img');
    const computerImg = document.querySelector('#computer-img');
    const player_score = document.querySelector('.player-score');
    const computer_score = document.querySelector('.computer-score');

    playerImg.setAttribute('src', `./images/${user}.png`)
    computerImg.setAttribute('src', `./images/${computer}.png`)

    const userWin = (user === 'rock' && computer === 'scissor') || (user === 'paper' && computer === 'rock') || (user === 'scissor' && computer === 'paper')

    const userLoss = (user === 'rock' && computer === 'paper') || (user === 'paper' && computer === 'scissor') || (user === 'scissor' && computer === 'rock')

    if (userWin) {
        player_score.textContent = +player_score.textContent + 1;
    }
    else if (userLoss) {
        computer_score.textContent = +computer_score.textContent + 1;
    }
    else {
        console.log('Draw');
    }

    if (+player_score.textContent === 5 && (+player_score.textContent > +computer_score.textContent)) {
        final.setAttribute('style', 'color: green;')
        final.textContent = 'you win !!';
    }
    else if (+player_score.textContent === 5 && (+player_score.textContent < +computer_score.textContent)) {
        final.setAttribute('style', 'color: red;')
        final.textContent = 'you loss !!';
    }
    else if (+player_score.textContent === 5 && (+player_score.textContent === +computer_score.textContent)) {
        final.textContent = 'draw';
    }

    console.log(user, computer, userWin, userLoss)
}))