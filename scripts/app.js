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

// -------------------- Cached DOM elements

const startButton = document.getElementById('startGame');

//  ------------------- Event Listeners

startButton.addEventListener('click', handleStartGame);

// -------------------- Function Declarations

function handleStartGame() {
    console.log('Start Game clicked...!');
}