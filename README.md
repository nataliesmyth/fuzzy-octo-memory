
# Square Click

Find and eliminate all the blue squares before time runs out! Can you beat all three rounds?

## Table of Contents

* [User Stories](#user-stories)
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)

## User Stories

-When user clicks begin, timer starts and squares populate with either a red, blue, green, or purple square
-When user click a color, the square disappears
-If the square is blue, the user gains 1 point, if the square is red, green, or purple, 1 point is subtracted from the score
-When round is over, the scores, round, and timer update for the user to start again
-Each round is 30 seconds, first round has 64 squares, second round has 96, and the third round has 128 squares

## General Info

1. When user clicks begin, timer starts and random colored squares populate the screen
1. Squares will be red, blue, green, or purple
1. Round 1 = 64 squares
1. Round 2 = 96 squares
1. Round 3 = 128 squares
1. For each round, timer = 30 seconds

1. When user clicks on a square, it disappears and score will go up if the square is blue or down if the square is any other color

-what adds score, what subtracts? Blue square click adds 1 point, all else subtracts 1 point
-how quickly should it disappear? Immediately
-how many points should be added or subtracted?

1. When round is over, scores and timer should be updated for the user to start over with increased difficulty
-how many players? 1
-what is the measure of difficulty? numbers of squares and time
-what ends a round? When time = 0 OR all blue squares are clicked
-how many rounds? 3

## Technologies

This project is created with:

* Javascript
* CSS
* HTML

## Project Status

Project is: _in progress_

## Room for Improvement

Room for improvement:

* Full game should be visible in the view port, scrolling should not be necessary
* Design and UX need work, how the game works isn't intuitive and there's too little direction

To do:


* Remove tiny square between rounds
* Refresh entire game after the third round

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

## Setups

To run this project, install it locally using npm:

```bash

cd ../lorem
npm install
npm start
```
