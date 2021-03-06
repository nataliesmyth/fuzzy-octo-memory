// console.log('Welcome to Poke-A-Square')

// -------------------- App State

let time = 30;
let score = 0;
let round = 1;
let blueSquares = 0

// -------------------- Cached DOM elements

const startButton = document.getElementById('startGame');
const squaresContainer = document.querySelector('.squares');
const gameBoard = document.getElementById('game-board');
const enterGame = document.getElementById('main');
const enterButton = document.getElementById('enter-btn')
const enterMessage = document.getElementById('enter-message');

//  ------------------- Event Listeners

enterGame.style.display = "none";
gameBoard.style.display = "none";

startButton.addEventListener('click', handleStartGame);


/************* Event Delegation *************/
    // Colored squares do not exist on the dom until Begin is clicked.
    // Event listeners are registered when the DOM loads
    // To fix this problem, use event delegation (assigning listener to parent)

enterButton.addEventListener('click', handleShowGame);
squaresContainer.addEventListener('click', handleSquareClick);

// -------------------- Function Declarations

function handleShowGame() {
    enterGame.style.display = "block";
    enterButton.style.display = "none";
    enterMessage.style.display = "none";
}

function handleStartGame() {
    gameBoard.style.display = "block";
    if (round === 1) {
        createSquares(64);
        startTimer();
    } else if (round === 2) {
        time = 30;
        createSquares(96);
        startTimer();
    } else if (round === 3) {
        time = 30;
        createSquares(128);
        startTimer();
    }
    // startTimer();
    // createSquares(squareCount);
    document.getElementById('startGame').style.display = 'none';
}

function startTimer() {
    const timer = setInterval(function () {
        if (blueSquares === 0 && time > 0) {
            console.log('You won the round')
            clearInterval(timer)
            updateTime()
            round++
            updateRound()
          }
      else if (time > 0) {
        time--;
        console.log(time);
        updateTime();
        // console.log(blueSquares)
      } else {
        console.log('Time is up');
        // Stop Timer
        clearInterval(timer);
  
        // Clear squares from DOM
        squaresContainer.innerHTML = '';
        gameBoard.style.display = "none";
  
        if ((round < 3) && (score > 0)) {
            updateTime()
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
        console.log(square.style.backgroundColor)
        if (square.style.backgroundColor === "blue")
            blueSquares ++
        console.log(blueSquares)
        // Add class to the new div (destructive)
        // square.className = 'square';
        // better solution is to use the class list: prevents overriding other class
        square.classList.add('square');

        // Append to .squares element
        squaresContainer.appendChild(square);
        console.log(square.classList)
        console.log(score)
    }
}

function getRandomColor() {
    const colors = ["red", "blue", "green", "purple"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    // console.log('randomIndex = ', randomIndex);

    const randomColor = colors[randomIndex];
    
    // console.log(randomColor)
    return randomColor;
    trackRandomColor()
}



function trackRandomColor() {
    let blueSquareCount = 0;
    for(let i = 0; i <= randomColor.length; i++) {
        if (i === 'blue')
        blueSquareCount ++
    }
    console.log('this is the blue square count ', blueSquareCount)
}


function handleSquareClick(event) {
    // event.target is what we click on
    // console.log(event.target)
    // console.log(event.target.classList.contains('square'));
    if (event.target.classList.contains('square')) {
        // console.log('square clicked!');
        squaresContainer.removeChild(event.target)
    squareColor = event.target.style.backgroundColor;
    console.log(`this is: ${squareColor}`)
    
    
    checkScore(squareColor);    
    }
}

function updateRound() {
    document.getElementById('round').innerText = `round : ${round};`
    document.getElementById('startGame').style.display = 'inline';
} 

function checkScore(color) {
    if (color === "blue") { 
        score++;
        blueSquares--;
        console.log(blueSquares);
        console.log(`you scored! score = ${score}`);
        // Update the UI
        updateScoreBoard();
    } else if ((color != "blue") && (score >= 0)) {
        score--;
        console.log(`you lost a point! score = ${score}`);
        updateScoreBoard();
    } 
    // if color = blue; score = score + 1
    // else; score = score -1
}

function updateScoreBoard() {
    document.querySelector('h4').innerText = `Score: ${score}`;
}

// $('.squares').on('click', '.square', handleSquareClick);
// jQuery event delegation