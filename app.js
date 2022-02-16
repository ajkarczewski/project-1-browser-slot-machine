/*-------------------------------- Constants --------------------------------*/
// const winningCombos = [
//   ['🍇', '🍇', '🍇'],
//   ['🍒', '🍒', '🍒'],
//   ['🍌', '🍌', '🍌'],
// ]


/*-------------------------------- Variables --------------------------------*/
let wheel = ['🍇', '🍒', '🍌']
let wheel1
let wheel2
let wheel3
let jackPot

/*------------------------ Cached Element References ------------------------*/
const message = document.getElementById('message')
const resetButton = document.getElementById('reset')
const spinButton = document.getElementById('spin')
const wheel1El = document.getElementById('wheel1')
const wheel2El = document.getElementById('wheel2')
const wheel3El= document.getElementById('wheel3')



/*----------------------------- Event Listeners -----------------------------*/
resetButton.addEventListener('click', init)
spinButton.addEventListener('click', spin)
// bet1Button.addEventListener('click',)
// betMaxButton.addEventListener('click',)



/*-------------------------------- Functions --------------------------------*/
init()

function init() {

  jackPot = null

  render()
}

function render() {
  message.innerText = `Welcome, take your spin!`

  wheel1El.innerText = `🍇`
  wheel2El.innerText = `🍇`
  wheel3El.innerText = `🍇`

  jackPot = null

}  

function spin() {

  wheel1 = wheel[Math.floor(Math.random() * wheel.length)];
  wheel2 = wheel[Math.floor(Math.random() * wheel.length)];
  wheel3 = wheel[Math.floor(Math.random() * wheel.length)];

  wheel1El.innerText = wheel1
  wheel2El.innerText = wheel2
  wheel3El.innerText = wheel3

}


jackPot = checkJackPot()

function checkJackPot() {
  if (wheel1 === wheel2 && wheel2 === wheel3) { return true 
  } else {
    return false
  }
}
// ^^ tried switching out names to wheelEl or WheelSpin still didn't work

// use winning combos instead?

//include option for null?

console.log(jackPot)
console.log(jackPot)
console.log(jackPot)
console.log(jackPot)
console.log(wheel1)
// ^ the deferred DOM Node could not be resolved to a valid node
// jackPot will ONLY set to true

if (jackPot === true) {
  message.innerText = `JACKPOT!!!`
} else if (jackPot === false) {
  message.innerText = `Sorry, try again`
}
  // } else if (jackPot === null) {
//   message.innerText = `Welcome, take your Spin`
// }

// init starts game on jackpot and sets message to winning message
// change function to run checkJackPot only AFTER spin is click