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
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
        this.seek();
    }

    seek() {
        let t = this.target.copy();
        let direct = t.sub(this.pos);
        direct.limit(5);

        let v = direct.sub(this.vel);
        //let d = dist(this.pos.x,this.pos.y,this.target.x,this.target.y);
        //let m = map(d,0,grid.w,0,10);
        //v.mult(d);

        this.applyForce(v);
    }

    applyForce(f) {
        this.acc.add(f);
    }

    render() {
        noStroke();
        fill(200,50,100,100);
        ellipse(this.pos.x, this.pos.y, 20);
        stroke(0,70);
        line(this.pos.x,this.pos.y,this.target.x,this.target.y);
        
    }
}