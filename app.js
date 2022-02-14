/*-------------------------------- Constants --------------------------------*/
// const winningCombos = [
//   [1, 1, 1],
//   [2, 2, 2],
//   [3, 3, 3],
// ]


/*-------------------------------- Variables --------------------------------*/
let wheel = ["cherry", "grapes", "bananas"]
// let winningSpin

/*------------------------ Cached Element References ------------------------*/
// const message = document.querySelector('#message')
// const resetButton = document.getElementById('reset')
// const wheel = document.querySelectorAll('wheel')



/*----------------------------- Event Listeners -----------------------------*/
// resestButton.addEventListener('click', init)
//spinButton.addEventListener('click', spin)
// bet1Button.addEventListener('click',)
// betMaxButton.addEventListener('click',)



/*-------------------------------- Functions --------------------------------*/
// init()

// function init() {
//   wheel1 = [null],
//   wheel2 = [null],
//   wheel3 = [null],
//   winningSpin = null
  
//   render()
// }

// function spin() {

// }

// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min) + min)
// }

// console.log(getRandomInt(1, 4))

let wheel1 = wheel[Math.floor(Math.random() * wheel.length)]
let wheel2 = wheel[Math.floor(Math.random() * wheel.length)]
let wheel3 = wheel[Math.floor(Math.random() * wheel.length)]

console.log(wheel1)
console.log(wheel2)
console.log(wheel3)


  if (wheel1 === wheel2 && wheel2 === wheel3) {
    console.log('Jackpot!')
  } else {
    console.log('Sorry, try again')}
