class Segment {
    constructor(kind="BWE",col,row,tint="darkseagreen") {
        this.tint = tint;
        this.kind = kind[0];
        //this.source = kind[1];
        //this.destination = kind[2];

        this.row = row;
        this.col = col;

        let x = col * grid.w + grid.w/2;
        let y = row * grid.w + grid.w/2;

        this.target = createVector(x,y);
        this.pos = createVector(x,y);
        this.vel = createVector(0,0);
        this.acc = createVector(0,0);
        

        
        

    }

    update() {
        if(!snake.segments[0].isIdle) {
            this.vel.add(this.acc);
            this.pos.add(this.vel);
            this.acc.mult(0);
            this.seek();
        }
        
    }

    seek() {
        let desired = p5.Vector.sub(this.target, this.pos);
        let d = desired.mag();
        desired.normalize();
        
        if(d<grid.w/2) {
            let m = map(d, 0, grid.w, 0, 30);
            desired.mult(m);
        } else {
            desired.mult(4);
        }
        if(d<1 && !snake.segments[0].isIdle) {
            snake.segments[0].isIdle = true;
            //this.pos.x = this.col * grid.w + grid.w/2;
            //this.pos.y = this.row * grid.w + grid.w/2;
        }
        let steer = p5.Vector.sub(desired, this.vel);
        steer.limit();
        this.applyForce(steer); 
        
    }

    applyForce(f) {
        this.acc.add(f);
    }

    render() {
        push();
        translate(this.pos.x, this.pos.y);
        rotate(this.vel.heading());
        noStroke();
        fill("darkgreen");
        arc(0,-grid.w/4, grid.w/4, grid.w/4, 0, 180);
        arc(0, grid.w/4, grid.w/4, grid.w/4, 180, 0);
        pop(); 
        

        // if(this.kind=="H") {
        //     text(this.vel.heading(), 100,100);
        // }

    }
}