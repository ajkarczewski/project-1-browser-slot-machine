/*-------------------------------- Constants --------------------------------*/
// const winningCombos = [
//   [1, 1, 1],
//   [2, 2, 2],
//   [3, 3, 3],
// ]


/*-------------------------------- Variables --------------------------------*/
let wheel = ["cherry", "grapes", "bananas"]
let wheel1
let wheel2
let wheel3
let jackPot
// let winningSpin

/*------------------------ Cached Element References ------------------------*/
// const message = document.querySelector('#message')
// const resetButton = document.getElementById('reset')
// const wheel = document.querySelectorAll('wheel')
const spinButton = document.getElementById('spin')



/*----------------------------- Event Listeners -----------------------------*/
// resestButton.addEventListener('click', init)
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

}

function spin(wheel) {

let wheel1 = wheel[Math.floor(Math.random() * wheel.length)]

let wheel2 = wheel[Math.floor(Math.random() * wheel.length)]
let wheel3 = wheel[Math.floor(Math.random() * wheel.length)]


jackPot = checkJackPot()


function checkJackPot() {

  if (wheel1 === wheel2 && wheel2 === wheel3) {
    message.innerText = `Jackpot!`
  } else {
    message.innerText = `Sorry, try again!`
  }

}
}

// if (jackPot === false) {
//   message.innerText = `Sorry, try again!`
// } else if (jackPot === true) {
//   message.innerText = `Jackpot!`
// }