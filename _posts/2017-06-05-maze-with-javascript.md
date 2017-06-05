---
layout: post
title: A Maze with JavaScript and HTML5 (Part 1)
cover: cover.jpg
categories: [coding]
---

We all loved to solve small mazes as kids. I was wondering over the last weekend how one would implement a maze with html5 and JavaScript.
I started developing the project as a game with the canvas element using phaser. But later decided it was much better with a table.
<br/>
Oh the things we can do with the html table tag and some JavaScript!
<br/>
We Imagine as maze as a huge table with each border of each cell acting as a wall. We turn walls on and off to create a path inside the grid.
However detecting which wall is open is difficult this way, also, it is difficult to make the maze editable, which I planned to do. As detecting clicks on a border is difficult.

So what do I mean by editable maze?
Take a look at [tinyjs.games/maze/make/](https://tinyjs.games/maze/make/) (The project is still under development so not all features of the maze work)

So we need each border of the table clickable. Which would be unnecessarily difficult to implement with html5 and JavaScript.
Instead we use alternate cells as walls and spaces. Inspect the table element on the implementation link above and see how that works!

### The Table Element Generation

1. Each Cell is surrounded by 4 walls
2. So even rows in the table (starting from 0) are wall rows
3. Odd rows have 1 cell row and 1 wall row alternate

Take a look at this code:

<script src="https://gist.github.com/geekman-rohit/70ed94ca09d58f5f5e0d16b7708f4c15.js"></script>


1. We have marked wall cells with wall class
2. The joints between walls are marked as joint class


### Add some css magic to make wall cells look like borders

We reduce the width of vertical wall cells, height of horizontal wall cells, and both width and height of joint cells

<script src="https://gist.github.com/geekman-rohit/66ef22bbf7d8ee3e1070416d03d6eb3e.js"></script>

### Making it clickable

Making it clickable is as easy as it goes, we edit the generateCell function in the code above to add a click event trigger on every wall cell, and simply taggle an `inactive` class

<script src="https://gist.github.com/geekman-rohit/cc0e27bc09dfc42f6cba215b8cddb4c5.js"></script>

### In Part 2:
In Part 2 of this post that I will be posting next week, I will try to make the maze playable with a starting position , a final position and a small ball as player!
