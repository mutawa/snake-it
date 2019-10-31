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
        let head = this.segments[0];
        if(row==1) {
            head.source= "N";
            head.destination = "S";
        } else if(row==-1) {
            head.source= "S";
            head.destination = "N";
        } else if(col==1) {
            head.source="W";
            head.destination="E";
        } else {
            head.source="E";
            head.destination="W";
        }
        

        for(let i=this.segments.length-1; i>0; i--) {
            let c = this.segments[i];
            let n = this.segments[i-1];

            //c.source = c.destination;
            c.destination = n.destination;

            c.s0.x = n.s0.x;
            c.s0.y = n.s0.y;
            c.s1.x = n.s1.x;
            c.s1.y = n.s1.y;
            c.s2.x = n.s2.x;
            c.s2.y = n.s2.y;
        }

        if (col==1) {
            //head.s1.x += grid.w;
            head.s1.xd = 1;
        } else if (col==-1) {
            //head.s1.x -= grid.w;
            head.s1.xd = -1;
        } else if (row==1) {
            //head.s1.y += grid.w;
            head.s1.yd = 1;
        } else if (row==-1) {
            head.s1.yd = -1;
            //head.s1.y -= grid.w;
        }


        if(head.source=="S") {
            head.s0.y = head.s1.y + grid.w/2;
            head.s0.x = head.s1.x;
        } else if (head.source=="N") {
            head.s0.y = head.s1.y - grid.w/2;
            head.s0.x = head.s1.x;
        } else if (head.source=="E") {
            head.s0.y = head.s1.y;
            head.s0.x = head.s1.x + grid.w/2;
        } else if (head.source=="W") {
            head.s0.y = head.s1.y;
            head.s0.x = head.s1.x - grid.w/2;
        }
        

        if(head.destination=="S") {
            head.s2.y = head.s1.y + grid.w/2;
            head.s2.x = head.s1.x;
        } else if (head.destination=="N") {
            head.s2.y = head.s1.y - grid.w/2;
            head.s2.x = head.s1.x;
        } else if (head.destination=="E") {
            head.s2.y = head.s1.y;
            head.s2.x = head.s1.x + grid.w/2;
        } else if (head.destination=="W") {
            head.s2.y = head.s1.y;
            head.s2.x = head.s1.x - grid.w/2;
        }


        
    }
    kill() {
        this.segments.forEach(seg => {
            seg.tint = "red";
        });
    }
}