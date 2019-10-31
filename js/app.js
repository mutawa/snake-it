"use strict";

let grid;
let snake;
let keys = {};

function setup() {
    
    angleMode(DEGREES);
    createCanvas(800, 400);
    grid = new Grid(16, 8);
    snake = new Snake(5,5,2);
    frameRate(8);
    
    
}

function keyPressed() {
    keys[keyCode] = true;
}
function keyReleased() {
    delete keys[keyCode];
}
function handleKeys() {
    if(keys[RIGHT_ARROW]) { snake.handleKey(RIGHT);}
    else if(keys[LEFT_ARROW]) { snake.handleKey(LEFT);}
    else if(keys[UP_ARROW]) { snake.handleKey(UP);}
    else if(keys[DOWN_ARROW]) { snake.handleKey(DOWN);}
}
function draw() {
    //background(255);
    grid.render();

    snake.update();
    snake.render();
    handleKeys();
    
}

