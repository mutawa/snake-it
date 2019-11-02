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
                
                let tint = count%2 ? "#eee" : "#ccc ";
                this.tiles.push(new Tile(col,row,this.w,this.h,tint));

                
                count++;
            }
            count++;
        }



    }
    isTileOccupied(col,row) {
        let reply;
        let markTile = this.tiles.forEach(tile => {
            if(tile.row==row && tile.col==col) {
                reply = tile.isOccupied;
                return;
            }
        });
        return reply;
    }
    mark(col,row) {
        let markTile = this.tiles.forEach(tile => {
            if(tile.row==row && tile.col==col) {
                tile.isOccupied = true;
                return;
            }
        });
        
    }
    unmark(col,row) {
        let markTile = this.tiles.forEach(tile => {
            if(tile.row==row && tile.col==col) {
                tile.isOccupied = false;
                return;
            }
        });
        
    }

    render() {
        this.tiles.forEach(tile => { tile.render(); });
    }

    hasFood(col, row) {
        let exists = foods.filter(food => food.col==col && food.row==row );
        return exists.length>0;
    }
}