
for (let i = 0; i < 5; i++) {
    // your code here!

function playRound(playerSelection, computerSelection) {

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
            return `You won! ${playerSelection} beats ${computerSelection}.`
        }
        
        else {
            return `You lost. ${computerSelection} beats ${playerSelection}.`
        }
    }
    else{
        return alert('Insert a valid value')
    }

    
    
  }



  let randomNum = (Math.floor(Math.random()*(4 - 1) + 1))

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
  

  const playerSelection = prompt('Choose between rock, paper and scissors');
  const computerSelection = computerPlay
  console.log(playRound(playerSelection, computerSelection));
}


