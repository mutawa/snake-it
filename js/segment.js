class Segment {
    constructor(kind="BWE",col,row,tint="darkseagreen") {
        this.kind = kind[0];
        this.orientation = kind.substr(1);

        this.row = row;
        this.col = col;
        
        //grid.mark(col,row);
        this.tint = tint;
        this.animation = 0;

    }

    update() {
        if(this.animation > 0 && this.animation<1) {
            this.animation += 0.2;
        }
        
        

    }

    render() {
        let x = this.col * grid.w + grid.w /2;
        let y = this.row * grid.w + grid.w /2;
        push();
        translate(x,y);
        
        if (debugMode) {
            noStroke();
            fill(0);
            textSize(grid.w * 0.15);
            text(this.orientation,-grid.w * .45,-grid.w * .45);
            text(this.orientation,grid.w * .25,grid.w * .25);
        }

        switch(this.kind) {
            case "H":

                switch(this.orientation[1]) {
                    case "E": rotate(0); break;
                    case "N": rotate(-90); break;
                    case "W": rotate(180); break;
                    case "S": rotate(90); break;
                }
                translate(grid.w * this.animation, 0);
                strokeCap(SQUARE);
                stroke(this.tint);
                strokeWeight(grid.w * 0.5);
                line(-grid.w/2,0,0,0);


                strokeWeight(5);
                stroke("red");
                line(0,0,grid.w,0);
                
                noStroke();

                fill(this.tint);
                ellipse(0,0,0.6 * grid.w);
                
                fill("white");
                ellipse(-3,-4,0.3 * grid.w);
                ellipse(-3, 4,0.3 * grid.w);
                fill("green");
                ellipse(-2,-4,5);
                ellipse(-2, 4,5);
                
             
                break;
            case "B":
                
                stroke(this.tint);
                strokeWeight(grid.w/2);
                strokeCap(SQUARE);
                // check if the segment is straight
                if("WE EW SN NS".indexOf(this.orientation)>-1) {
                    // this is a straight segment
                    switch(this.orientation) {
                        case "WE":
                            rotate(0);
                            break;
                        case "EW":
                            rotate(180);
                            break;
                        case "SN":
                            rotate(-90);
                            break;
                        case "NS":
                            rotate(90);
                            break;
                        default:
                            break;
                    }
                    translate(grid.w * this.animation, 0);

                    line(-grid.w/2,0,grid.w/2,0);
                    noStroke();
                    fill("darkgreen");
                    arc(grid.w * 0.25,-grid.w/4,grid.w/4, grid.w/4 , 0, 180);
                    arc(-grid.w * 0.25,grid.w/4,grid.w/4, grid.w/4 , 180, 360);
                    if(debugMode) {
                        noFill();
                        stroke(0,50);
                        strokeWeight(2);
                        line(-grid.w/4,0,grid.w/4,0);
                        line(grid.w/4,0,0,-grid.w/8);
                        line(grid.w/4,0,0,grid.w/8);
                    }

                } else if ("WN NW EN NE ES SE SW WS".indexOf(this.orientation) > -1) {
                    // this is a diagonal segment

                    switch(this.orientation) {
                        case "SE": rotate(0); break;
                        case "ES": rotate(90); scale(1,-1); break;
                        case "WN": rotate(90); scale(-1,1); break;
                        case "NE": rotate(180); scale(-1,1); break;
                        case "EN": rotate(90); scale(-1,-1); break;
                        case "WS": rotate(-90); scale(-1); break;
                        case "SW": rotate(0); scale(-1,1); break;
                        case "NW": rotate(0); scale(-1); break;
                    }
                    noFill();
                    arc(grid.w/2,grid.w/2,grid.w,grid.w,-180,-90);
                    noStroke();
                    fill("darkgreen");
                    arc(grid.w * 0.25,-grid.w*.22,grid.w/4,grid.w/4,0,150);
                    if(debugMode) {
                        stroke(0,50);
                        noFill();
                        strokeWeight(2);
                        arc(grid.w/2,grid.w/2,grid.w,grid.w,-150,-100);
                        
                        line(grid.w * 0.4 ,0,grid.w * 0.25,-grid.w*0.05);
                        line(grid.w * 0.4 ,0,grid.w * 0.3,grid.w * 0.15);
                    }

                }

                break;

            case "T":
                
                switch(this.orientation[1]) {
                    case "E":
                        rotate(0);
                        break;
                    case "S":
                        rotate(90);
                        break;
                    case "W":
                        rotate(180);
                        break;
                    case "N":
                        rotate(-90);
                        break;
                    default: 
                        break;
                }
                translate(grid.w * this.animation, 0);

                stroke(this.tint);
                strokeCap(SQUARE);
                strokeWeight(grid.w/2);
                line(0,0,grid.w/2,0);
                noStroke();
                fill(this.tint);
                ellipse(0,0,grid.w/2);

                if(debugMode) {
                    noFill();
                    stroke(0,50);
                    strokeWeight(2);
                    line(-grid.w/4,0,grid.w/4,0);
                    line(grid.w/4,0,0,-grid.w/8);
                    line(grid.w/4,0,0,grid.w/8);
                }

                break;
            default:
                break;
        }
        pop();
    }
}