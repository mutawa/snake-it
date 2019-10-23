class Grid {
    constructor(cols, rows) {
        this.rows = rows;
        this.cols = cols;
        
        this.w = width/cols;
        this.h = this.w;
    }

    render() {
        let count = 0;
        for(let row=0; row<this.rows; row++) {
            for(let col=0; col<this.cols; col++) {
                let x = col * this.w;
                let y = row * this.w;
                fill( count%2 ? "gold" : "beige " );
                noStroke();
                rect(x,y,this.w, this.h);
                count++;
            }
            count++;
        }
    }
}