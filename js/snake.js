class Snake {
    constructor(segmentCount=2,col,row) {

        this.segments = [];
        this.segments.push(new Segment(HEAD,col,row));
        for(let i=0; i<segmentCount-2; i++) {
            this.segments.push(new Segment(BODY,--col,row));
        }
        this.segments.push(new Segment(TAIL, --col,row));
        this.colSpeed = 0;
        this.rowSpeed = 0;
        this.angleTarget = RIGHTY.angle;
        this.angleSpeed = 0;

    }

    update() {

        if(this.rowSpeed != 0 ) {
            if(abs(this.segments[0].row - this.rowTarget)>0.1) {
                this.segments[0].row += this.rowSpeed;
            } else {
                this.segments[0].row = this.rowTarget;
                this.rowSpeed = 0;
            }
        }

        if(this.colSpeed != 0 ) {
            if(abs(this.segments[0].col - this.colTarget)>0.1) {
                this.segments[0].col += this.colSpeed;
            } else {
                this.segments[0].col = this.colTarget;
                this.colSpeed = 0;
            }
        }
        if(this.colSpeed ==0 && this.rowSpeed ==0 ) {
            this.angleSpeed = 0;
        } else if(this.angleSpeed != 0 ) {
            if(this.segments[0].direction.angle != this.angleTarget.angle) {

                if(abs(this.segments[0].direction.angle - this.angleTarget.angle) > 15) {
                    this.segments[0].direction.angle += this.angleSpeed;
                } else {
                    this.segments[0].direction.angle = this.angleTarget.angle;
                    this.segments[0].direction.direction = this.angleTarget.name;

                    this.angleSpeed = 0;
                }
            }
        }

        
        
    }

    render() {
        this.segments.forEach(segment => {
            segment.render();
        });
    }

    move(direction) {
        this.angleTarget = {};        
        switch(direction) {
            
            case RIGHT:
                this.angleTarget.name = "right";
                if(this.segments[0].direction.direction == "down") {
                    
                    this.angleTarget.angle = this.segments[0].direction.angle - 90;
                    this.angleSpeed = -15;
                } else if (this.segments[0].direction.direction == "up") {
                    
                    this.angleTarget.angle = this.segments[0].direction.angle + 90;
                    this.angleSpeed = 15;
                }
                this.colSpeed = 0.07;
                this.rowSpeed = 0;
                this.colTarget = this.segments[0].col + 1;
                this.rowTarget = this.segments[0].row;
                break;
            case UP:
                this.angleTarget.name = "up";
                if(this.segments[0].direction.direction == "right") {
                    
                    this.angleTarget.angle = this.segments[0].direction.angle - 90;
                    this.angleSpeed = -15;
                } else if (this.segments[0].direction.direction == "left") {
                    
                    this.angleTarget.angle = this.segments[0].direction.angle + 90;
                    this.angleSpeed = 15;
                }    


                
                this.colSpeed = 0;
                this.rowSpeed = -0.07;
                this.colTarget = this.segments[0].col ;
                this.rowTarget = this.segments[0].row  - 1;
                break;
            case LEFT:

                this.angleTarget.name = "left";
                if(this.segments[0].direction.direction == "up") {
                    
                    this.angleTarget.angle = this.segments[0].direction.angle - 90;
                    this.angleSpeed = -15;
                } else if (this.segments[0].direction.direction == "down") {
                    
                    this.angleTarget.angle = this.segments[0].direction.angle + 90;
                    this.angleSpeed = 15;
                }

                
                this.colSpeed = -0.07;
                this.rowSpeed = 0;
                this.colTarget = this.segments[0].col - 1;
                this.rowTarget = this.segments[0].row;
                break;
            case DOWN:
            
                this.angleTarget.name = "down";
                if(this.segments[0].direction.direction == "left") {

                    this.angleTarget.angle = this.segments[0].direction.angle - 90;
                    this.angleSpeed = -15;
                } else if (this.segments[0].direction.direction == "right") {
                    
                    this.angleTarget.angle = this.segments[0].direction.angle + 90;
                    this.angleSpeed = 15;
                }    

                this.colSpeed = 0;
                this.rowSpeed = 0.07;
                this.colTarget = this.segments[0].col;
                this.rowTarget = this.segments[0].row + 1;
                break;
            default:
                this.speed = 0;
                break;
        }
        
    }
}