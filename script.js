/*let playerScore = 0
let compScore = 0

function playRound(playerSelection, computerSelection) {  

    //compares player's and computer's play and determine the winner. Them add a point to playerScore or compScore.
    if (playerSelection == null || ''){
        return alert('Cancelled')
    }
    
    else if (playerSelection.toLowerCase() == 'rock' || playerSelection.toLowerCase() == 'paper' || playerSelection.toLowerCase() == 'scissors'){
        if (playerSelection == computerSelection){
            return 'tie'
        }else if (
            playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors' ||
            playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock' ||
            playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper'
        ) {
            playerScore++
            return `You won! ${playerSelection} beats ${computerSelection}.`
        }
        
        else {
            compScore++
            return `You lost. ${computerSelection} beats ${playerSelection}.`
        }
    }
    else{
        return alert('Insert a valid value')
    }

    
    
  }

  //loop
  for (let i = 0; i < 1; i) { //repeat the process until one of the players reach 3 points.

    if (playerScore === 3){
        alert('You won! Congratulations')
        break;
    }
    else if (compScore === 3){
        alert('You lost!')
        break;
    }
    else{

        let randomNum = (Math.floor(Math.random()*(4 - 1) + 1)) //This variable choose a number between 1 and 3, these numbers are converted into 'rock', 'paper' or 'scissors' values.

        switch (randomNum) {

            case 1:
                computerPlay = 'rock'
                break;
            case 2:
                computerPlay = 'paper'
                break;
            case 3:
                computerPlay = 'scissors'
                break;
        }
        

        const playerSelection = prompt(`Choose between rock, paper and scissors\n Your Score: ${playerScore} | Computer Score: ${compScore} `);
        const computerSelection = computerPlay
        console.log(playRound(playerSelection, computerSelection)); // The playRound function, with the parameter values, executes the process of comparison of results again and again.
        continue;
    }

}
*/


