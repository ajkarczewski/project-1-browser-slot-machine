/*-------------------------------- Constants --------------------------------*/
const wheel = ['💿', '🪐', '✨']

/*-------------------------------- Variables --------------------------------*/
let wheel1
let wheel2
let wheel3
let jackPot
let gameOver
let tokenValue

/*------------------------ Cached Element References ------------------------*/
const message = document.getElementById('message')

const resetButton = document.getElementById('reset')
const spinButton = document.getElementById('spin')

const displayTokens = document.getElementById('tokens')

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
    message.textContent = `Take your spin!`

    wheel1El.innerText = '🪐'
    wheel2El.innerText = '🪐'
    wheel3El.innerText = '🪐'

    jackPot = false

    gameOver = false

    tokenValue = 50

    displayTokens.innerText = `${tokenValue} TOKENS`
}


function spin() {
    wheel1 = wheel[Math.floor(Math.random() * wheel.length)]
    wheel2 = wheel[Math.floor(Math.random() * wheel.length)]
    wheel3 = wheel[Math.floor(Math.random() * wheel.length)]

    wheel1El.innerText = wheel1
    wheel2El.innerText = wheel2
    wheel3El.innerText = wheel3

    payTokens()

    checkJackPot()

    checkLoser()
}

function payTokens() {
    tokenValue = displayTokens.textContent = parseInt(displayTokens.textContent) - 10

    displayTokens.textContent = `${tokenValue} TOKENS`
}


function checkJackPot() {
    if (wheel1 === wheel2 && wheel1 === wheel3 && wheel2 === wheel3) {
        jackPot = true
    }
    checkWinner()
    addTokens()
}

function checkWinner() {
    if (jackPot === true) {
        message.textContent = `JACKPOT!!!`
        confetti.start(1000)
    } else {
        message.textContent = `Sorry, try again`
    }
}

function addTokens() {
    if (jackPot === true) {
        tokenValue = [displayTokens.textContent = parseInt(displayTokens.textContent) + 50]
        displayTokens.innerText = `${tokenValue} TOKENS`
    }
}

function checkLoser() {
    if (tokenValue <= 0) {
        gameOver = true
        message.textContent = `Out of tokens! No spins left. reset game to try again...`
        spinButton.setAttribute("hidden, true")
    }
}