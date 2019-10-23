"use strict";

let grid;
let snake;


function setup() {
    
    angleMode(DEGREES);
    createCanvas(800, 400);
    grid = new Grid(16, 8);
    snake = new Snake(5,5,2);
    
    
}
function keyPressed() {
    switch(keyCode) {
        case RIGHT_ARROW: snake.handleKey(RIGHT); break;
        case LEFT_ARROW: snake.handleKey(LEFT); break;
        case UP_ARROW: snake.handleKey(UP); break;
        case DOWN_ARROW: snake.handleKey(DOWN); break;
        default:
            break;

    }
    
    
 
}
function draw() {
    //background(255);
    grid.render();

    snake.update();
    snake.render();
    
}

