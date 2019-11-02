"use strict";

let grid;
let snake;
let keys = {};
let foods = [];

function setup() {
    
    angleMode(DEGREES);
    createCanvas(800, 400);
    grid = new Grid(16, 8);
    snake = new Snake(3,5,2);
    //frameRate(8);
    for(let i=1; i<20; i++) {
        let col = parseInt(random(grid.cols));
        let row = parseInt(random(grid.rows));

        foods.push(new Food(col, row));
    }
    
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

    foods.forEach(food => {
        food.render();
    });

    snake.update();
    snake.render();
    handleKeys();
    
}

