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
        this.segments.forEach(segment => {
            segment.update();
        });
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
        let head = this.segments[0];
        if(this.isMoving || head.orientation[0] == toDirection[1]) { return; }

        this.isMoving = true;

        this.segments.forEach(segment => {
            let that = this;
            segment.update = function() {
                this.animation += 0.01;
                if(this.animation > 0.99) {
                    this.update = function() {}
                    this.animation = 0;
                    this.col += 1;
                    that.isMoving = false;
                }
            }
        });
        
        

    }
    kill() {
        this.segments.forEach(seg => {
            seg.tint = "red";
        });
    }
}