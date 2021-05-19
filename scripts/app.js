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
// handle start game function triggers two other functions
function handleStartGame() {
    // console.log('Start Game clicked...!');

    // Start Timer (function one)
    startTimer();

    // Create Squares (function two)
    createSquares(squareCount);
}
// pull timer out of start game for readability

// TODO: #1 Prevent Multiple Timers
function startTimer() {
    
    // grab time and save it as a timer
    // Set interval gives an interval id needed to stop the timer
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

// PSEUDOCODE: CREATE SQUARES FUNCTION
// How many squares?
// Create div element for each square
// Colors array for color options
// Random index to get random color
// Apply random color to the div as background-color
// Append the square to parent '.squares' element

function createSquares(numberOfSquares) {
    console.log('Create Squares running');

    for (let i = 1; i <= numberOfSquares; i++) {
        
        // create square
        const square = document.createElement('div');
        // add background color
        square.style.backgroundColor = getRandomColor(); 
        console.log(square)
        // Append to .squares element to the DOM
        squaresContainer.appendChild(square);
    }
}

function getRandomColor() {
    const colors = ['red', 'purple', 'blue', 'green'];

    const randomIndex = Math.floor(Math.random() * colors.length);
    
    // console.log('randomIndex = ', randomIndex);

    randomColor = colors[randomIndex];

    return colors[randomIndex];
}