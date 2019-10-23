class Segment {
    constructor(kind="BH",col,row) {
        this.kind = kind[0];
        this.row = row;
        this.col = col;
        this.direction = kind[1];
        grid.mark(col,row);
    }

    render() {
        let x = this.col * grid.w + grid.w /2;
        let y = this.row * grid.w + grid.w /2;
        push();
        translate(x,y);
        

        switch(this.kind) {
            case "H":
                switch(this.direction) {
                    case "R": rotate(0); break;
                    case "U": rotate(-90); break;
                    case "L": rotate(180); break;
                    case "D": rotate(90); break;
                }
                
                stroke("darkseagreen");
                strokeWeight(20);
                line(-grid.w/2,0,0,0);


                strokeWeight(3);
                stroke("red");
                line(0,0,10,0);
                
                noStroke();

                fill("darkseagreen");
                ellipse(0,0,0.6 * grid.w);
                
                fill("white");
                ellipse(-3,-4,0.3 * grid.w);
                ellipse(-3, 4,0.3 * grid.w);
                fill("green");
                ellipse(-2,-4,5);
                ellipse(-2, 4,5);
                
             
                break;
            case "B":
                stroke("steelblue");
                strokeWeight(20);
                strokeCap(SQUARE);
                switch(this.direction) {
                    case "H":
                        line(-grid.w/2,0,grid.w/2,0);
                        break;
                    case "V":
                        line(0,-grid.w/2,0,grid.w/2);
                        break;
                    case "SW":
                        arc(-grid.w/2,grid.w/2,grid.w,grid.w,-90,0);
                        break;
                    case "SE":
                        arc(grid.w/2,grid.w/2,grid.w,grid.w,-180,-90);
                        break;
                    case "NE":
                        arc(grid.w/2,-grid.w/2,grid.w,grid.w,90,180);
                        break;
                    case "NW":
                        arc(-grid.w/2,-grid.w/2,grid.w,grid.w,0,90);
                        break;
                    default: 
                        break;
                }

                break;
            case "T":
                stroke("orange");
                strokeCap(ROUND);
                strokeWeight(20);
                switch(this.direction) {
                    case "E":
                        line(0,0,grid.w/2,0);
                        break;
                    case "N":
                        line(0,0,0,-grid.w/2);
                        break;
                    case "W":
                        line(0,0,-grid.w/2,0);
                        break;
                    case "S":
                        line(0,0,0,grid.w/2);
                        break;
                    default: 
                        break;
                }
                break;
            default:
                break;
        }
        pop();
    }
}