"use strict";
const debugMode = true;

let grid;
let snake;
let keys = {};

function setup() {
    
    angleMode(DEGREES);
    textAlign(LEFT,TOP);
    createCanvas(800, 400);
    grid = new Grid(16, 8);
    snake = new Snake(13,2,7);
    //frameRate(8);
    
    
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

