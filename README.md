
# Square Click

Find and eliminate all the blue squares before time runs out! Can you beat all three rounds?

## Table of Contents

* [Screenshots](#screenshots)
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)

## Screenshots

![screenshot](./img/screenshot.png)

## General Info

1. When user clicks begin, timer starts and random colored squares populate the screen
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

## Technologies

This project is created with:

* jQuery version: 3.6.0
* Ipsum version: 2.33
* Ament library version: 999

## Project Status

Project is: _in progress_

## Room for Improvement

Room for improvement:

* Full game should be visible in the view port, scrolling should not be necessary
* Design and UX need work, how the game works isn't intuitive and there's too little direction

To do:

* Prevent multiple timers
* Have a round end when
* Keep track of users scores

## Acknowledgements

Give credit here.

* This project was inspired by...
* This project was based on [this tutorial](https://www.example.com).
* Many thanks to...

## Contact

Created by [Natalie Smyth](https://www.nataliesmyth.com/) - feel free to contact me!

<!-- Optional -->
<!-- ## License -->
<!-- This project is open source and available under the [... License](). -->

## Setup

To run this project, install it locally using npm:

```bash

cd ../lorem
npm install
npm start
```

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
