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

  wheel1 = ['']
  wheel2 = ['']
  wheel3 = ['']
  

  jackPot = null

  render()
}

function render() {
  message.innerText = `Welcome, take your spin!`

  wheel1El.innerText = `🍇`
  wheel2El.innerText = `🍇`
  wheel3El.innerText = `🍇`

}  
// function spin(wheel) {
//   return wheel[Math.floor(Math.random() * wheel.length)]
// }

// spin(wheel1)
// spin(wheel2)
// spin(wheel3)

// console.log(wheel1)
// console.log(wheel2)
// console.log(wheel3)


// jackPot = checkJackPot()


// function checkJackPot() {

//   if (wheel1 === wheel2 && wheel2 === wheel3) {
//     message.innerText = `Jackpot!`
//   } else {
//     message.innerText = `Sorry, try again!`
//   }

// }


// if (jackPot === false) {
//   message.innerText = `Sorry, try again!`
// } else if (jackPot === true) {
//   message.innerText = `Jackpot!`
//