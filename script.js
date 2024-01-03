let randomNumber = parseInt(Math.random() * 100 +1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const startOver = document.querySelector('.resultParas');
const lowOrHi = document.querySelector('.lowOrHi'); 
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');

const p = document.createElement('p');

let previousGuesses = [];
let numGuess = 1;

let playGame = true;

if(playGame){
  submit.addEventListener('click', function(e){
    e.preventDefault();
    const guess = parseInt(userInput.value)
    validateGuess(guess)
    
  })
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert('Please enter a valid guess')
  }
  else if(guess < 0){
    alert('Please enter a number greater than 1!')
  }
  else if(guess > 100){
    alert('Please enter a number less than 100!')
  }
  else{
    previousGuesses.push(guess)
    if(numGuess === 11){
      displayGuess(guess)
      displayMessage(`Game Over! Number was ${randomNumber}`)
      endGame()
    }
    else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess){
  if(guess === randomNumber){
    displayMessage(`You guessed correctly!`)
    endGame()
  }
  else if(guess < randomNumber){
    displayMessage(`Too low! Try again!`)
  }
  else {
    displayMessage(`Too High! Try again!`)
  }
}

function displayGuess(guess){
  userInput.value = ''
  guessSlot.innerHTML += `${guess}  `
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){ 
  userInput.value = '';
  userInput.setAttribute('disabled','');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame(){
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function(e){
    randomNumber = parseInt(Math.random()*100 + 1);
    previousGuesses = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
    
  })
  // Center-align the button using flexbox
  p.style.display = 'flex';
  p.style.justifyContent = 'center';
  p.style.alignItems = 'center';
}


