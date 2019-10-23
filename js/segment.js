class Segment {
    constructor(kind=BODY,col,row) {
        this.kind = kind;
        this.row = row;
        this.col = col;
        this.direction = RIGHTY;
    }

    render() {
        let x = this.col * grid.w + grid.w /2;
        let y = this.row * grid.w + grid.w /2;
        push();
        translate(x,y);
        rotate(this.direction.angle);

        switch(this.kind) {
            case HEAD:
                
                
                fill("red");
                ellipse(10,0,10);
                

                fill("darkseagreen");
                ellipse(0,0,20);
                
                fill("white");
                ellipse(-3,-4,7);
                ellipse(-3, 4,7);
                fill("green");
                ellipse(-2,-4,5);
                ellipse(-2, 4,5);
                
             
                break;
            case BODY:
                fill("darkseagreen");
                switch(this.direction.direction) {
                    case "up":
                    case "down":
                            rect(-4,0,grid.w/2-2,grid.w);
                        break;
                    case "left":
                    case "right":
                            rect(-grid.w/2,-4,grid.w,8);
                        break;
                    default: 
                        break;
                }

                
            case TAIL:
                break;
            default:
                break;
        }
        pop();
    }
}