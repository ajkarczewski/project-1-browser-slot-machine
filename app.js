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

// let winningSpin

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

}  

function spin() {

  wheel1Spin = wheel[Math.floor(Math.random() * wheel.length)];
  wheel2Spin = wheel[Math.floor(Math.random() * wheel.length)];
  wheel3Spin = wheel[Math.floor(Math.random() * wheel.length)];

  wheel1El.innerText = wheel1Spin
  wheel2El.innerText = wheel2Spin
  wheel3El.innerText = wheel3Spin

}

// jackPot = checkJackPot()


// function checkJackPot() {
//   if (wheel1Spin === wheel2Spin && wheel2Spin === wheel3Spin)
// }
