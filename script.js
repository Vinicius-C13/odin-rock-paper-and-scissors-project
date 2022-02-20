

// cash your DOM = Before you start you need to store some informations in variables to make your job easier.
let userScore = 0;
let computerScore = 0;
const playerScore_span = document.getElementById('player-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score');
const result_div = document.getElementById('result');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');


function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

//userPlay and computerPlay receive the values of userChoice e computerChoice.
function win(userPlay, computerPlay) {
    userScore++;
    let userPlay_div = document.getElementById(userPlay);
    playerScore_span.textContent = userScore;
    computerScore_span.textContent = computerScore;
    result_div.textContent = `${userPlay} beats ${computerPlay}. YOU WIN! `;
    userPlay_div.classList.add('green-glow');
    setTimeout(function(){userPlay_div.classList.remove('green-glow')}, 300)

}


function lose(userPlay, computerPlay) {
    computerScore++;
    let userPlay_div = document.getElementById(userPlay);
    playerScore_span.textContent = userScore;
    computerScore_span.textContent = computerScore;
    result_div.textContent = `${userPlay} loses to ${computerPlay}. YOU LOST!`;
    userPlay_div.classList.add('red-glow');
    setTimeout(function(){userPlay_div.classList.remove('red-glow')}, 300)
    
}


function draw(userPlay, computerPlay) {
    let userPlay_div = document.getElementById(userPlay);
    result_div.textContent = `${userPlay} equals ${computerPlay}.`;
    userPlay_div.classList.add('blue-glow');
    setTimeout(function(){userPlay_div.classList.remove('blue-glow')}, 300)
    
}


function game(userChoice) {
    const computerChoice = getComputerChoice()

    switch (userChoice+computerChoice) {

        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            win(userChoice, computerChoice);
            break;
        case 'scissorsrock':
        case 'rockpaper':
        case 'paperscissors':
            lose(userChoice, computerChoice);
            break;
        case 'scissorsscissors':
        case 'rockrock':
        case 'paperpaper':
            draw(userChoice, computerChoice);
            break;
    }
    
}

function main () {

rock_div.addEventListener('click', function(){
    game('rock');
});

paper_div.addEventListener('click', function(){
    game('paper');
});

scissors_div.addEventListener('click', function(){
    game('scissors');
});

}

main()

