console.log('Welcome to Poke-A-Square')

// CODE ORGANIZATION

// Third Party Libraries: moment, underscore, jquery
// Constants
// App State
// Cached DOM Elements
// Event Listeners
// Functions
// steps to start game
    // select button
    // save button in variable
    // add click event listener to button

// -------------------- App State

const squareCount = 25;
let time = 30;

// -------------------- Cached DOM elements

const startButton = document.getElementById('startGame');
console.log(startButton)

//  ------------------- Event Listeners

startButton.addEventListener('click', handleStartGame);

// -------------------- Function Declarations

// when function runs, the timer will start and the divs will fill with colors
function handleStartGame() {
    console.log('Start Game clicked...!');
    // Start Timer
    startTimer()
}
// grab time and save it as a timer
// pull timer out of start game for readability

function startTimer() {

    const timer = setInterval(function () {
        if (time > 0) {
            time--;
            console.log(time);
        } else {
            console.log('Time is up')
            clearInterval(timer);
        }
    }, 1000)
}