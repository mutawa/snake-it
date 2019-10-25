class Snake {
    constructor(col,row,segmentCount=3) {

        this.segments = [];

        this.segments.push(new Segment("HWE",col,row));
        this.segments.push(new Segment("BWE",--col,row));
        this.segments.push(new Segment("BSE",--col,row));
        this.segments.push(new Segment("BWN",col,++row));
        this.segments.push(new Segment("BWE",--col,row));
        // for(let i=0; i<segmentCount-2; i++) {
        //     this.segments.push(new Segment("BWE",--col,row));
        // }

        this.segments.push(new Segment("TWE", --col,row));


    }

    update() {

        

        
        
    }

    render() {
        this.segments.forEach(segment => {
            segment.render();
        });
    }

    handleKey(direction) {
        let head = this.segments[0];

        head.previousDirection = head.direction;
        

        switch(direction) {
            
            case RIGHT:
                this.move("WE");
                
                break;
            case UP:

                this.move("SN");
                break;
            case LEFT:

                this.move("EW");
                break;
            case DOWN:

                this.move("NS");
                break;
            default:
        
                break;
        }
        
    }
    move(toDirection,fraction) {
        let head = snake.segments[0];
        if(head.orientation[0] == toDirection[1]) { return; }

        

        let col = 0,row = 0;
        switch(toDirection) {
            case "WE": col=1; row=0; break;
            case "EW": col=-1; row=0; break;
            case "NS": col=0; row=1; break;
            case "SN": col=0; row=-1; break;
            default:
                break;
        }

        let newTail = snake.segments[snake.segments.length-2];
        let beforeTail = snake.segments[snake.segments.length-3];

        let tail = snake.segments.pop();
        grid.unmark(tail);

        tail.col = head.col;
        tail.row = head.row;
        tail.kind = "B";

        newTail.kind = "T";
        
        switch(beforeTail.direction) {
            case "NW":
                if(beforeTail.row > newTail.row) { newTail.direction = "S"; }
                else if(beforeTail.col > newTail.col) { newTail.direction = "E"; }
                break;
            case "NE":
                if(beforeTail.row > newTail.row) { newTail.direction = "S"; }
                else if(beforeTail.col < newTail.col) { newTail.direction = "W"; }
                break;
            case "SW":
                if(beforeTail.row < newTail.row) { newTail.direction = "N"; }
                else if(beforeTail.col > newTail.col) { newTail.direction = "E"; }
                break;
            case "SE":
                if(beforeTail.row < newTail.row) { newTail.direction = "N"; }
                else if(beforeTail.col < newTail.col) { newTail.direction = "W"; }
                break;
            case "H":
                if(beforeTail.col > newTail.col) { newTail.direction = "E"; } 
                else { newTail.direction = "W"; }
                break;
            case "V":
                if(beforeTail.row > newTail.row) { newTail.direction = "S"; } 
                else { newTail.direction = "N"; }
                break;
            default:
                break;
        }

        
        tail.orientation = head.orientation[0] + toDirection[1];
        head.orientation = toDirection;

        snake.segments.splice(1,0,tail);

        if(grid.isTileOccupied(head.col + col, head.row + row)) {
            this.kill();
        }
        
        head.col += col;
        head.row += row;
        
        grid.mark(head);
        
        
        

    }
    kill() {
        this.segments.forEach(seg => {
            seg.tint = "red";
        });
    }
}