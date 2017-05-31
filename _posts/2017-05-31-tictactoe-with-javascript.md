---
layout: post
title: Tic-Tac-Toe with JavaScript and HTML5
cover: cover.jpg
categories: [coding]
---

Tic-Tac-Toe is an age old classic Game.
Recently I decided to start making open source html5 games. I started with Tic-Tac-Toe.
This post is a little explanation of the code for beginners in html5 and JavaScript. Though I encourage any readers to simply explore the code at
[github.com/tinyjsgames/tictactoe](https://github.com/tinyjsgames/tictactoe).
Tic-Tac-Toe is relatively very easy to implement. All you need to do is keep track of turn and write a victory Condition. The job is complicated if you decide to build a game that allows playing against a computer.

1. Use `table` element to represent the board.
2. Write a victory Condition.
3. Write the Computer AI function to play the best possible move.

### The Board

In most games, the visuals you see are merely a representation of things and objects handled in the background. Even in this very simple game I decided to take the same approach.

<script src="https://gist.github.com/geekman-rohit/7fd641d3bcb8b052cd27e83a02cf9e53.js"></script>

This approach also allows us to test the game with different initial states when testing the AI function we are about to write.

<br />
### The Victory Condition:

The Victory condition is very easy to write. You simply loop through rows and columns and see if any row or column have the same move.
In this example I test the diagonals separately.
Since I use the same loop for column and row test, I have maintain extra variables to save a victory state.
The Victory condition function takes a board as input, instead of just using the present game state. This allows us to use this function later in AI.

<script src="https://gist.github.com/geekman-rohit/3bcb6eaabe941c9b4c56e458da86c3b8.js"></script>



<br />
### The AI:

The AI is by far the hardest to implement. We loop through each possible future move recursively and give ratings based on if the move leads to victory.
1. Play all possible current moves for current Player
2. Call the function recursively with board after playing each move (separately)
3. Repeat this until a victory is detected
4. Negative Rating if the victory belongs to enemy

This function basically iterates through all possible moves(of the computer and player) and decides the best one.

<script src="https://gist.github.com/geekman-rohit/827412dc30482b6efd69296f5d66bcb0.js"></script>



<br />
### Putting it all together.

Explore the complete code on github at
[github.com/tinyjsgames/tictactoe/blob/master/js/tictactoe.js](https://github.com/tinyjsgames/tictactoe/blob/master/js/tictactoe.js)
Play the game at [tinyjs.games](https://tinyjs.games)

<br />
