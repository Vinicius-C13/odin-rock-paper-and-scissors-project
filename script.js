

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
const refreshButtonContainer_div = document.getElementById('reset-div');
const refresh_button = document.createElement('button');

//If the user cancels the function warning confirm to restart the game, a button appears in page to refresh the page and play again.
function buttonRefresh() {
    refreshButtonContainer_div.appendChild(refresh_button);
    refresh_button.textContent = 'Play Again';
    refresh_button.classList.add('refresh-button-style')

    //I think that do this in a function apart is better.
    refresh_button.addEventListener('click', function(){
        document.location.reload();
    })

}

//Shows a confirm popup in page. If the user clicks "ok" the page refresh and game restard, 
//if user clicks "cancel", this function calls the buttonRefresh function.
function warning(resultado) {
    let confirme = confirm(resultado + ' Click in "ok" to play again:')
    if (confirme === true) {
        document.location.reload()
    }
    else {
        buttonRefresh()
    }
}

//variable "randomNumber" chooses a number between 0 and 2, this number corresponds to the index of one item in choices array.
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

//If user wins, this function is called to add 1 point and chance the round's message.
function win(userPlay, computerPlay) {
    ++userScore;
    let userPlay_div = document.getElementById(userPlay);
    playerScore_span.textContent = userScore;
    computerScore_span.textContent = computerScore;
    result_div.textContent = `${userPlay} beats ${computerPlay}. YOU WIN! `;
    userPlay_div.classList.add('green-glow');
    setTimeout(function(){userPlay_div.classList.remove('green-glow')}, 300)
    
    if (userScore >= 5) {
        warning('You Win!')
    }

}

//If user lose, this function is called to add 1 point to computer score and chance the round's message.
function lose(userPlay, computerPlay) {
    computerScore++;
    let userPlay_div = document.getElementById(userPlay);
    playerScore_span.textContent = userScore;
    computerScore_span.textContent = computerScore;
    result_div.textContent = `${userPlay} loses to ${computerPlay}. YOU LOST!`;
    userPlay_div.classList.add('red-glow');
    setTimeout(function(){userPlay_div.classList.remove('red-glow')}, 300)
    if (computerScore >= 5) {
        warning('You lost.')
        
    }

    
}


function draw(userPlay, computerPlay) {
    let userPlay_div = document.getElementById(userPlay);
    result_div.textContent = `${userPlay} equals ${computerPlay}.`;
    userPlay_div.classList.add('blue-glow');
    setTimeout(function(){userPlay_div.classList.remove('blue-glow')}, 300)
    
}

//This function compares the choices and call function "win" if the user win, function "lose" if the user loses and function "draw" if choices are equal.
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
    
//This function is the start and the end, it listen to a click event in one of the three option and 
//send a parameter with user's choice to "game" function compare the result.
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

//This is very important to the game works, this function call serves sto start the game and return the results. 
//Without this call, any other function works.
main()

