"use strict";

let grid;
let snake;


function setup() {
    
    angleMode(DEGREES);
    createCanvas(400, 400);
    grid = new Grid(18, 18);
    snake = new Snake(5,10,10);
    
    
}
function keyPressed() {
    if(snake.colSpeed ==0 && snake.rowSpeed == 0) {
        switch(keyCode) {
            case RIGHT_ARROW: snake.move(RIGHT); break;
            case LEFT_ARROW: snake.move(LEFT); break;
            case UP_ARROW: snake.move(UP); break;
            case DOWN_ARROW: snake.move(DOWN); break;
            default:
                break;
    
        }
    }
    
 
}
function draw() {
    background(255);
    grid.render();

    snake.update();
    snake.render();
    
}

