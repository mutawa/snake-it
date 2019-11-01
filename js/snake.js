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
        
        if(head.vel.mag()>0) { return; }

        for(let i=this.segments.length-1; i>0; i--) {
            let c = this.segments[i];
            let n = this.segments[i-1];
            c.target = n.pos.copy();

        }

        head.target = head.pos.copy();
        if(row==1) {
            head.target.y += grid.w;

        } else if(row==-1) {
            head.target.y -= grid.w;
        } else if(col==1) {
            head.target.x += grid.w;

        } else if(col==-1) {
            head.target.x -= grid.w;
        }

       


        
    }
    kill() {
        this.segments.forEach(seg => {
            seg.tint = "red";
        });
    }
}