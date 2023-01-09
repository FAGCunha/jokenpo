const computerChoiceDisplay = document.getElementById('computer-choice')
const yourChoiceDisplay = document.getElementById('your-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  yourChoice = e.target.id
  yourChoiceDisplay.innerHTML = yourChoice
  generateComputerChoice()
  getResult()
}))
function generateComputerChoice(){
                                                                
const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1
                                                                
if (randomNumber === 1) {
                                                                  
computerChoice = 'rock'
                                                                
}                                                          
 if (randomNumber === 2) {
                                                                  
computerChoice = 'scissors'
                                                                
}
  if (randomNumber === 3) {
    computerChoice = "papper"
  } 
                                                              
computerChoiceDisplay.innerHTML = computerChoice
                                                              
}
function getResult() {
  if (computerChoice === yourChoice) {
    result = 'its a draw!'
  }
  if (computerChoice === 'rock' && yourChoice === 'papper'){
    result = 'you win!'
  }
  if (computerChoice === 'rock' && yourChoice === 'scissors'){
    result = 'you lost!'
  }
  if (computerChoice === 'papper' && yourChoice === 'scissors'){
    result = 'you win!'
  }
  if (computerChoice === 'papper' && yourChoice === 'rock'){
    result = 'you lost!'
  }
  if (computerChoice === 'scissors' && yourChoice === 'rock'){
    result = 'you win!'
  }
  if (computerChoice === 'scissors' && yourChoice === 'papper'){
    result = 'you lost!'
  }
resultDisplay.innerHTML = result
}
