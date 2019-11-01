class Snake {
    constructor(segmentCount=3,col,row) {

        this.segments = [];
        this.segments.push(new Segment("HWE",col,row));
        for(let i=0; i<segmentCount-2; i++) {
            this.segments.push(new Segment("BWE",--col,row));
        }
        this.segments.push(new Segment("TWE", --col,row));


    }

    update() {

        this.segments.forEach(seg => { seg.update(); });

        
        
    }

    render() {
        let head = this.segments[0];
        curveTightness(6);
        
    
        // draw the body
        stroke(head.tint);
        strokeWeight(grid.w/2);
        for(let i=this.segments.length-1; i>0; i--) {
            let c=this.segments[i];
            let n=this.segments[i-1];
            var midX=c.pos.x+(n.pos.x-c.pos.x)*0.50;
            var midY=c.pos.y+(n.pos.y-c.pos.y)*0.50;
            line(c.pos.x, c.pos.y, n.pos.x,n.pos.y);
            //curve( c.pos.x, c.pos.y, c.pos.x, c.pos.y, midX+random(-1,1), midY+random(-1,1), n.pos.x, n.pos.y);
            //line(c.pos.x, c.pos.y, midX, midY);
            //line(midX, midY, n.pos.x, n.pos.y);
            c.render(n.vel.heading());
        }

        // draw the head
        push();
        translate(head.pos.x, head.pos.y);
        rotate(head.vel.heading());
        
        noStroke();

        // fill("darkgreen");
        // arc(-grid.w/2,0,grid.w/4,grid.w/4,0,360);
        // arc(-grid.w/2,grid.w/4,grid.w/4,grid.w/4, 180,0);
        
        fill(head.tint);
        ellipse(0,0,0.6 * grid.w);
        
        fill("white");
        ellipse(-3,-4,0.3 * grid.w);
        ellipse(-3, 4,0.3 * grid.w);
        fill("green");
        ellipse(-2,-4,5);
        ellipse(-2, 4,5);
        pop();
        

    }

    handleKey(direction) {
        switch(direction) {    
            case RIGHT: this.move(1,  0); break;
            case UP:    this.move(0, -1); break;
            case LEFT:  this.move(-1, 0); break;
            case DOWN:  this.move(0,  1); break;
            default:                      break;
        }
    }

    move(col,row) {
        
        let head = this.segments[0];
        let neck = this.segments[1];
        //console.log("head:", head.col, head.row, "neck:", neck.col, neck.row)
        if(!head.isIdle) { 
            //console.log("wait", head.col, head.row, neck.col, neck.row);
            return; 
        }
        if(head.row + row > grid.rows-1 || head.row + row < 0) { return; }
        if(head.col + col > grid.cols-1 || head.col + col < 0) { return; }
        
        if(head.row+row == neck.row && head.col+col==neck.col) { console.log("cant"); return;}
        

        for(let i=this.segments.length-1; i>0; i--) {
            let c = this.segments[i];
            let n = this.segments[i-1];
            c.target = n.pos.copy();
            c.row = n.row;
            c.col = n.col;

        }
        let oldX = (head.col) * grid.w + grid.w/2;
        let oldY = (head.row) * grid.w + grid.w/2;
        head.col += col;
        head.row += row;
        let newX = (head.col) * grid.w + grid.w/2;
        let newY = (head.row) * grid.w + grid.w/2;
        
      
        
        head.target.x = newX;
        head.target.y = newY;
        head.pos.x = oldX;
        head.pos.y = oldY;

        
        head.isIdle = false;

        

        //


       


        
    }
    kill() {
        this.segments.forEach(seg => {
            seg.tint = "red";
        });
    }
}