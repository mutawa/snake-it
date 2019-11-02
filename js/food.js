class Food {
    constructor(col, row) {
        this.col = col;
        this.row = row;

        this.x = this.col * grid.w + grid.w/2;
        this.y = this.row * grid.w + grid.w/2;

    }

    render() {
        
        
        push();
        translate(this.x,this.y);
        fill("green");
        ellipse(0,0,grid.w/2);
        pop();
        
    }
    
}