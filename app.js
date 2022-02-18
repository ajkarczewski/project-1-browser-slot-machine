/*-------------------------------- Constants --------------------------------*/
const wheel = ['💿', '🪐', '✨']
//SOUNDS


/*-------------------------------- Variables --------------------------------*/
let wheel1
let wheel2
let wheel3
let jackPot

let credits
let lostGame

/*------------------------ Cached Element References ------------------------*/
const message = document.getElementById('message')

const resetButton = document.getElementById('reset')
const spinButton = document.getElementById('spin')

const displayCredits = document.getElementById('credits')
//we're going to add and subtract from the starting number

const wheel1El = document.getElementById('wheel1')
const wheel2El = document.getElementById('wheel2')
const wheel3El = document.getElementById('wheel3')




/*----------------------------- Event Listeners -----------------------------*/
resetButton.addEventListener('click', init)
spinButton.addEventListener('click', spin)





/*-------------------------------- Functions --------------------------------*/
init()

function init() {


  render()
}

function render() {
  message.innerText = `take your spin!`

  wheel1El.innerText = '🪐'
  wheel2El.innerText = '🪐'
  wheel3El.innerText = '🪐'

  credits = 50

  displayCredits.innerText = `${credits} TOKENS`

}  

function spin() {
  wheel1 = wheel[Math.floor(Math.random() * wheel.length)];
  wheel2 = wheel[Math.floor(Math.random() * wheel.length)];
  wheel3 = wheel[Math.floor(Math.random() * wheel.length)];

  console.log(wheel1, wheel2, wheel3)
  wheel1El.innerText = wheel1
  wheel2El.innerText = wheel2
  wheel3El.innerText = wheel3

  payTokens()

  checkJackPot()
}

function payTokens() {
  displayCredits.textContent = parseInt(displayCredits.textContent) - 10
}


function checkJackPot() {
  if (wheel1 === wheel2 && wheel1 === wheel3 && wheel2 === wheel3) {
    jackPot = true
  }
  checkWinner()
}

function checkWinner() {
console.log(jackPot)
if (jackPot === true) {
  message.innerText = `JACKPOT!!!`
} else {
  message.innerText = `Sorry, try again`
}
}