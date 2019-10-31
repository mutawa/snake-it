class Segment {
    constructor(kind="BWE",col,row,tint="darkseagreen") {
        this.tint = tint;
        this.kind = kind[0];
        this.source = kind[1];
        this.destination = kind[2];

        this.row = row;
        this.col = col;

        let x = col * grid.w + grid.w/2;
        let y = row * grid.w + grid.w/2;

        this.s0 = {x: x, y: y, xd : 0, yd : 0};
        this.s1 = {x: x, y: y, xd : 0, yd : 0};
        this.s2 = {x: x, y: y, xd : 0, yd : 0};
        
        


        switch(this.source) {
            case "W": this.s0 = {x: x-grid.w/2, y: y}; break;
            case "N": this.s0 = {x: x,          y: y-grid.w/w}; break;
            case "E": this.s0 = {x: x+grid.w/2, y: y}; break;
            case "S": this.s0 = {x: x,          y: y+grid.w/2}; break;
            default: break;
        }

        switch(this.destination) {
            case "W": this.s2 = {x: x-grid.w/2, y: y}; break;
            case "N": this.s2 = {x: x,          y: y-grid.w/w}; break;
            case "E": this.s2 = {x: x+grid.w/2, y: y}; break;
            case "S": this.s2 = {x: x,          y: y+grid.w/2}; break;
            default: break;
        }

        this.s0.xd=0; this.s0.yd=0;
        this.s1.xd=0; this.s1.yd=0;
        this.s2.xd=0; this.s2.yd=0;
        
        

    }

    update() {
        this.s0.x += this.s0.xd;
        this.s0.y += this.s0.yd;
        this.s1.x += this.s1.xd;
        this.s1.y += this.s1.yd;
        this.s2.x += this.s2.xd;
        this.s2.y += this.s2.yd;

        
    }
    render() {
        let x = this.s1.x;
        let y = this.s1.y;
        
        fill(255,0,0,100);
                
        noStroke();
        
        text(this.kind, x - grid.w/2, y - 10);
        ellipse(this.s0.x, this.s0.y, 15);
        fill(0,255,0,100);
        text(this.kind, this.s1.x , y - 10);
        ellipse(this.s1.x, this.s1.y, 10);
        fill(0,0,255,100);
        text(this.kind, this.s2.x , y + 15);
        ellipse(this.s2.x, this.s2.y, 5);


        // switch(this.kind) {
        //     case "H":
        //         // push();
        //         // translate(x,y);
        //         // switch(this.direction) {
        //         //     case "R": rotate(0); break;
        //         //     case "U": rotate(-90); break;
        //         //     case "L": rotate(180); break;
        //         //     case "D": rotate(90); break;
        //         // }
                
        //         // stroke(this.tint);
        //         // strokeWeight(20);
        //         // line(-grid.w/2,0,0,0);


        //         // strokeWeight(3);
        //         // stroke("red");
        //         // line(0,0,20,0);
                
        //         // noStroke();

        //         // fill(this.tint);
        //         // ellipse(0,0,0.6 * grid.w);
                
        //         // fill("white");
        //         // ellipse(-3,-4,0.3 * grid.w);
        //         // ellipse(-3, 4,0.3 * grid.w);
        //         // fill("green");
        //         // ellipse(-2,-4,5);
        //         // ellipse(-2, 4,5);
                
        //         // pop();
        //         break;
                
        //     case "B":
                

        //         break;
        //     case "T":
        //         stroke(this.tint);
        //         strokeCap(ROUND);
        //         strokeWeight(20);
        //         switch(this.direction) {
        //             case "E":
        //                 line(0,0,grid.w/2,0);
        //                 break;
        //             case "N":
        //                 line(0,0,0,-grid.w/2);
        //                 break;
        //             case "W":
        //                 line(0,0,-grid.w/2,0);
        //                 break;
        //             case "S":
        //                 line(0,0,0,grid.w/2);
        //                 break;
        //             default: 
        //                 break;
        //         }
        //         break;
        //     default:
        //         break;
        // }
        
    }
}