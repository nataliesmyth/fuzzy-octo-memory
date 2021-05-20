// console.log('Welcome to Poke-A-Square')

// -------------------- App State

const squareCount = 25;
let time = 3;

// -------------------- Cached DOM elements

const startButton = document.getElementById('startGame');
const squaresContainer = document.querySelector('.squares');

//  ------------------- Event Listeners

// EVENT DELEGATION
// We want to listen for a click on squares that arent initially part of the dom
// When we register event listeners, it's going to register them for whatever is in the DOM, which our squares aren't in yet
// This happens because we already loaded HTML, so it's in memory, and we don't have any development inside an element with a class of squares, so we get back an empty node
startButton.addEventListener('click', handleStartGame);
squaresContainer.addEventListener('click', handleSquareClick);

// -------------------- Function Declarations

// when function runs, the timer will start and the divs will fill with colors
// handle start game function triggers two functions: startTimer and createSquares
function handleStartGame() {
    // Start Timer (function one)
    startTimer();
    // Create Squares (function two)
    createSquares(squareCount);
}

// TODO: #1 Prevent Multiple Timers
function startTimer() {
    // Set interval gives an interval id needed to stop the timer
    // grab time and save it as a timer
    const timer = setInterval(function () {
        if (time > 0) {
            time--;
            console.log(time);
            updateTime();
        } else {
            console.log('Time is up')
            clearInterval(timer);
        }
    }, 1000);
}

// The timer works, but we need to fix the UI so the timer shows up in the browser
// We want to update the time element with new time value on each interval
function updateTime () {
    // method chaining
    document.getElementById('timer').innerText = `timer: ${time}`;

    // same code without method chaining
    // const timer = document.getElementById('timer');
    // timer.innerText = time;
}


function createSquares(numberOfSquares) {
    console.log('Create Squares running');

    for (let i = 1; i <= numberOfSquares; i++) {        
        // create square
        const square = document.createElement('div');
        // add background color
        square.style.backgroundColor = getRandomColor(); 
        
        // Add class to the new div (destructive)
        // square.className = 'square';
        // better solution is to use the class list: prevents overriding other class
        square.classList.add('square');

        // Append to .squares element
        squaresContainer.appendChild(square);
    }
}

function getRandomColor() {
    const colors = ['red', 'purple', 'blue', 'green'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    // console.log('randomIndex = ', randomIndex);

    const randomColor = colors[randomIndex];

    return randomColor;
}

function handleSquareClick(event) {
    console.log(event.target.classList.contains('square'));
}