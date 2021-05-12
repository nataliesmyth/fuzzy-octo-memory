// console.log('Welcome to Poke-A-Square')

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
// console.log(startButton)
const squaresContainer = document.querySelector('.squares');
console.log(squaresContainer)

//  ------------------- Event Listeners

startButton.addEventListener('click', handleStartGame);

// -------------------- Function Declarations

// when function runs, the timer will start and the divs will fill with colors
function handleStartGame() {
    // console.log('Start Game clicked...!');

    // Start Timer
    startTimer();

    // Create Squares
    createSquares(squareCount);
}
// pull timer out of start game for readability

// TODO: #1 Prevent Multiple Timers
function startTimer() {
    
    // grab time and save it as a timer
    const timer = setInterval(function () {
        if (time > 0) {
            time--;
            console.log(time);
        } else {
            console.log('Time is up')
            clearInterval(timer);
        }
    }, 1000);
}

// How many squares?
// Create div element for each square
// Colors array of red bnlue green purple
// Random index to get random color
// Apply random color to the div as background-color
// Append the square to parent '.squares' element
function createSquares(numberOfSquares) {
    // console.log('Create Squares running');
    const colors = ['red', 'purple', 'blue', 'green'];

    // const $square = $('</div>')
    // console.log($square);
    for (let i = 1; i <= numberOfSquares; i++) {
        
        const square = document.createElement('div');
        square.style.backgroundColor = 'blue'; 
        // `<div style="background-color: ${colors}"></div>`
        console.log(square)
        // Append to .squares element
        squaresContainer.appendChild(square);
    }
}