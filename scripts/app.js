// console.log('Welcome to Poke-A-Square')

// -------------------- App State

let time = 30000000;
let score = 0;
let round = 1;
let blueSquares = 0

// -------------------- Cached DOM elements

const startButton = document.getElementById('startGame');
const squaresContainer = document.querySelector('.squares');
const squaresId = document.getElementById('squares-div')
const gameBoard = document.getElementById('game-board');
const enterGame = document.getElementById('main');
const enterButton = document.getElementById('enter-btn')
const enterMessage = document.getElementById('enter-message');
const nav = document.getElementById('nav')

//  ------------------- Event Listeners

enterGame.style.display = "none";
gameBoard.style.display = "none";

startButton.addEventListener('click', handleStartGame);


/************* Event Delegation *************/
// document.getElementById('squares-div').style.display = 'none';
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
    squaresId.style.display = "block";
    if (round === 1) {
        createSquares(64);
        startTimer();
    } else if (round === 2) {
        time = 30;
        squaresContainer.innerHTML = '';
        createSquares(96);
        startTimer();
    } else if (round === 3) {
        time = 30;
        squaresContainer.innerHTML = '';
        createSquares(128);
        startTimer();
    }
    // startTimer();
    // createSquares(squareCount);
    document.getElementById('startGame').style.display = 'none';
}

function startTimer() {
    // setInverval returns an interval id
    // Create variable to save this id (timer countdown)
    const timer = setInterval(function () {
        if (blueSquares === 0 && time > 0 && round <= 3) {
            console.log('You won the round')
            squaresId.style.display = "none";
            // In order to stop the timer, we need to use the clear interval function and pass the interval ID we saved in the timer variable
            clearInterval(timer)
            squaresContainer.innerHTML = '';
            time = 30;
            updateTime()
            round++
            updateRound()
            getRandomColor()
          }
      else if (time > 0) {
        time--;
        updateTime();
      } else {
          console.log('Time is up');
          // Stop Timer
          clearInterval(timer);
          updateTime();
          // Clear squares from DOM
          gameBoard.style.display = "none";
          squaresId.style.display = "none";
  
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
        // create div element for each square
        const square = document.createElement('div');
        // add background color
        square.style.backgroundColor = getRandomColor(); 
        if (square.style.backgroundColor === 'blue')
            blueSquares ++
        console.log(blueSquares)
        // Add class to the new div (destructive)
        // square.className = 'square';
        // better solution is to use the class list: prevents overriding other class
        square.classList.add('square');

        // Append squares to parent element
        squaresContainer.appendChild(square);
        console.log(square.classList)
        console.log(score)
    }
}

let randomColor;
function getRandomColor() {
    const colors = ["#CC2936", "blue", "#e3b505", "#FF3CC7"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    // console.log('randomIndex = ', randomIndex);

    randomColor = colors[randomIndex];
    
    // console.log(randomColor)
    return randomColor;
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
    console.log(event.target)
    // console.log(event.target.classList.contains('square'));
    if (event.target.classList.contains('square')) {
        // console.log('square clicked!');
        // squaresContainer.style.opacity = 0;
        // event.target.classList.squaresContainer.style.opacity = 0;
        squaresContainer.removeChild(event.target)
    squareColor = event.target.style.backgroundColor;
    squareColor.backgroundColor = '#fdfffc';
    console.log(`this is: ${squareColor}`)
    
    
    checkScore(squareColor);    
    }
}

function updateRound() {
    if (round <= 3) {
        document.getElementById('round').innerText = `round : ${round};`
        document.getElementById('startGame').style.display = 'inline';
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

function checkScore(color) {
    if (color === 'blue') { 
        score++;
        blueSquares--;
        console.log(blueSquares);
        console.log(`you scored! score = ${score}`);
        // Update the UI
        updateScoreBoard();
    } else if ((color != 'blue') && (score >= 0)) {
        score--;
        console.log(`you lost a point! score = ${score}`);
        updateScoreBoard();
    } 
    // if color = blue; score = score + 1
    // else; score = score -1
}

function updateScoreBoard() {
    document.getElementById('score').innerText = `Score: ${score}`;
}