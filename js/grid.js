class Grid {
    constructor(cols, rows) {
        this.tiles = [];
        this.rows = rows;
        this.cols = cols;
        
        this.w = width/cols;
        this.h = this.w;

        let count = 0;
        for(let row=0; row<this.rows; row++) {
            for(let col=0; col<this.cols; col++) {
                
                let tint = count%2 ? "gold" : "beige ";
                this.tiles.push(new Tile(col,row,this.w,this.h,tint));

                
                count++;
            }
            count++;
        }



    }
    mark(col,row) {
        let markTile = this.tiles.filter(tile => tile.row==row && tile.col==col);
        console.log(markTile);
        markTile.tint = "pink";
    }

    render() {
        this.tiles.forEach(tile => { tile.render(); });
    }
}