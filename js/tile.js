class Tile {
    constructor(col,row,w,h,tint) {
        this.col = col;
        this.row = row;
        let x = col * w;
        let y = row * w;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.tint = tint;
    }

    render() {
        fill( this.tint );
        noStroke();
        rect(this.x,this.y,this.w, this.h);
    }
}