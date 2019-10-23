class Snake {
    constructor(segmentCount=3,col,row) {

        this.segments = [];
        this.segments.push(new Segment("HR",col,row));
        for(let i=0; i<segmentCount-2; i++) {
            this.segments.push(new Segment("BH",--col,row));
        }
        this.segments.push(new Segment("TE", --col,row));


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
                this.move(1,0);
                
                break;
            case UP:

                this.move(0,-1);
                break;
            case LEFT:

                this.move(-1,0);
                break;
            case DOWN:

                this.move(0,1);
                break;
            default:
        
                break;
        }
        
    }
    move(col,row) {
        
        let head = snake.segments[0];
        let newTail = snake.segments[snake.segments.length-2];
        let beforeTail = snake.segments[snake.segments.length-3];

        let tail = snake.segments.pop();
        

        if(col==1) { head.direction = "R"; }
        else if(col==-1) { head.direction = "L"; }
        else if(row==1) { head.direction = "D"; }
        else if(row==-1) { head.direction = "U"; }


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

        
        if( head.previousDirection == head.direction) {
            
            switch(head.direction) {
                case "U":
                case "D":
                    tail.direction = "V";
                    break;
                case "R":
                case "L":
                    tail.direction = "H";
                    break;
                default:
                    break;
    
            }    
        } else {
            
            switch(head.previousDirection + head.direction) {
                case "RD":
                case "UL":
                    tail.direction = "SW";
                    break;

                case "RU":
                case "DL":
                    tail.direction = "NW";
                    break;
                case "LU":
                case "DR":
                    tail.direction = "NE";
                    break;
                case "UR":
                case "LD":
                        tail.direction = "SE";
                    break;
                default:
                    break;
    
            }
        }
        
        

        snake.segments.splice(1,0,tail);

        
        head.col += col;
        head.row += row;
        
        console.clear();
        console.table(snake.segments);
        

    }
}