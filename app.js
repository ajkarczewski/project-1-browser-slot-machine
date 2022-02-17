/*-------------------------------- Constants --------------------------------*/
const wheel = ['🍇', '🍒', '🍌']


/*-------------------------------- Variables --------------------------------*/
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

function spin(wheel) {

  wheel1Spin = Math.floor(Math.random() * wheel.length)
    wheel1El.(wheel[wheel1Spin])
  // wheel2Spin = Math.floor(Math.random() * wheel.fruits.length)
  // wheel3Spin = Math.floor(Math.random() * wheel.fruits.length)

  // wheel1El.innerText = wheel1Spin
  // wheel2El.innerText = wheel2Spin
  // wheel3El.innerText = wheel3Spin

}


// jackPot = checkJackPot()

// function checkJackPot() {
//   if (wheel1 === wheel2 && wheel2 === wheel3) { return true 
//   } else {
//     return false
//   } 
// }

// if (jackPot === true) {
//   message.innerText = `JACKPOT!!!`
// } else if (jackPot === false) {
//   message.innerText = `Sorry, try again`
// }

// } else if (jackPot === null) {
//   message.innerText = `Welcome, take your Spin`
// }

// init starts game on jackpot and sets message to winning message
// change function to run checkJackPot only AFTER spin is click