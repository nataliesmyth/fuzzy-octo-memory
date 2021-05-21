// console.log('Welcome to Poke-A-Square')

// -------------------- App State

let time = 30;
let score = 0;
let round = 1;

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

function handleStartGame() {

    if (round === 1) {
        createSquares(25);
        startTimer();
    } else if (round === 2) {
        createSquares(50);
        startTimer();
    } else if (round === 3) {
        createSquares(75);
        startTimer();
    }
    // startTimer();

    // createSquares(squareCount);
}

// TODO: Prevent Multiple Timers
function startTimer() {
    const timer = setInterval(function () {
      if (time > 0) {
        time--;
        console.log(time);
        updateTime();
      } else {
        console.log('Time is up');
        // Stop Timer
        clearInterval(timer);
  
        // Clear squares from DOM
        squaresContainer.innerHTML = '';
  
        if (round < 3) {
          round++;
          updateRound();
        } else {
          alert(`Game Over! Your score is ${score}`);
          score = 0;
          round = 1;
          time = 30;
          updateRound();
          updateTime();
          updateScoreBoard();
        }
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
    // console.log('Create Squares running');

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
    const colors = ["#BAF2BB", "#BAF2D8", "#BAD7F2", "#F2BAC9"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    // console.log('randomIndex = ', randomIndex);
    const randomColor = colors[randomIndex];

    return randomColor;
}

function handleSquareClick(event) {
    // event.target is what we click on
    console.log(event.target)
    // console.log(event.target.classList.contains('square'));
    if (event.target.classList.contains('square')) {
        console.log('square clicked!');
        squaresContainer.removeChild(event.target)
    squareColor = event.target.style.backgroundColor;
    console.log(`this is: ${squareColor}`)
    
    // don't forget to check score!
    checkScore(squareColor);    
    }
}

function updateRound() {
    document.getElementById('round').innerText = `round : ${round};`
}

function checkScore(color) {
    if (color === "rgb(186, 215, 242)") {
        score++;
        console.log(`you scored! score = ${score}`);
        // Update the UI
        updateScoreBoard();
    } else {
        score--;
        console.log(`you lost a point! score = ${score}`);
        updateScoreBoard();
    }
    // if color = blue; score = score + 1
    // else; score = score -1
}

function updateScoreBoard() {
    document.querySelector('h1').innerText = `Scoreboard: ${score}`;
}

// jQuery event delegation
// $('.squares').on('click', '.square', handleSquareClick);