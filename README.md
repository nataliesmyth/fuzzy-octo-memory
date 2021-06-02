# POKE A SQUARE
__________________
A game where the user has to find all the blue squares in 30 seconds.

## OBJECTIVE

-click as many blue squares as possible during the alloted time

## GAME LOGIC

1.When user clicks begin, timer starts and random colored squares populate the screen

-What colors? Red, blue, green, purple
-how many squares? round 1: 25 squares, double the squares each round
-what are squares? colored boxes on the screen
-where should they populate? inside the square section
-what should the timer start at? 30s

1. When user clicks on a square, the color disappears and score should go up or down

-what adds score, what subtracts? Blue square click adds 1 point, all else subtracts 1 point
-how quickly should it disappear? Immediately
-how many points should be added or subtracted?

1. When round is over, scores and timer should ben updated for the user to start over with increased difficulty
-how many players? 1
-what is the measure of difficulty? numbers of squares and time
-what ends a round? When time = 0 OR all blue squares are clicked
-how many rounds? 3

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

// PSEUDOCODE: CREATE SQUARES FUNCTION
// How many squares?
// Create div element for each square
// Colors array for color options
// Random index to get random color
// Apply random color to the div as background-color
// Append the square to parent '.squares' element
