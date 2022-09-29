class SchizoPlayer{
    constructor(idx, x, y){
        this.id = idx
        this.pos = createVector(x + random(-20, 20), y + random(-20, 20) )
        this.r = 10
        this.vel = createVector(random(-0.2, 0.2),random(-0.2, 0.2))
        this.acc = createVector(0,0)
        this.theta = 0
        this.bumpSpeed = 10 
        this.dead = false
    }

    addForce(f){
        // f is a vector
        this.acc.add(f)
        this.vel.add(this.acc)
        this.acc.mult(0)
    }

    boost(){
        //console.log('boosting')
        let boostVal = createVector(3,-4)
        this.addForce(boostVal)
        boostVal = 0
    }

    checkSegmentCollision(segment){
        // const d = 
        // if(colliding){
            
        // } else {
        //     return false
        // }
    }

    checkCircleCollision(other){
        const d = this.pos.dist(other.pos)
        if(d < this.r + other.r){
            other.trigger()
        }
    }

    checkLineCollision(l){
        if(l.closest){
    // get distance to closest point
    const normalHeading = l.normal.heading()
    //console.log(normalHeading)
const x = this.pos.x + sin( normalHeading * -1 + 90) * this.r
const y = this.pos.y + cos( normalHeading * -1 + 90) * this.r
let distX = l.closest.x - this.pos.x;
let distY = l.closest.y - this.pos.y;
// let distX = l.closest.x - x;
// let distY = l.closest.y - y;
let distance = sqrt( (distX * distX) + (distY * distY) );



// const x = this.pos.x + sin(line.normal.heading() + 90) * this.r
// const y = this.pos.y + cos(line.normal.heading() + 90) * this.r

this.edge = createVector(x, y)

let incidence =  p5.Vector.mult(this.vel, -1);
incidence.normalize();
//console.log(distance, '::::', this.r)
if (distance <= this.r * 3) {
l.active = true
setTimeout(l.reset, 500)
// what do we multiply velocity by?
let dot = incidence.dot(l.normal);
let velX = 2 * l.normal.x * dot - incidence.x
let velY = 2 * l.normal.y * dot - incidence.y

// if(this.vel.x > 0){
//     this.pos.x -= 2
// } else {
//     this.pos.x += 2
// }

// if(this.vel.y > 0){
//     this.pos.y -= 2
// } else {
//     this.pos.y += 2
// }

this.vel.set(velX, velY, 0);
this.vel.mult(this.bumpSpeed);

game.level.sosc[this.id].m.freq(random(0,50));
game.level.sosc[this.id].m.amp(random(-100, 100));
game.level.sosc[this.id].o.freq(game.level.freqs[l.id] * (random(0.5,1.0) - this.r/100) + random(0.1,0.3) )
game.level.sosc[this.id].o.amp(1.0)
setTimeout(this.stopSound, random(1000,))
        }
    

    //console.log('collided')
}

}

stopSound = () => {
    game.level.sosc[this.id].o.amp(0.0)
}
    update(){
        this.theta+=1
        this.pos.add(this.vel)
    }

    render(){
        stroke(60, 180, 30)
        strokeWeight(1)
        fill(143, 143, 143, 200)
        ellipse(this.pos.x, this.pos.y, this.r * 2)
        push()
        translate(this.pos.x, this.pos.y)
        rotate(this.theta)
        translate(-this.pos.x, -this.pos.y)
        
        pop()
        push()
        translate(this.pos.x, this.pos.y)
        rotate(this.vel.heading())
        translate(-this.pos.x, -this.pos.y)
        // wing thing
        const irisX = this.pos.x - this.r/3
        const irisY = this.pos.y
        fill(200)
        ellipse(irisX, irisY, this.r/4)
        const pupilX = this.pos.x - this.r/10
        const pupilY = this.pos.y
        fill(0)
        ellipse(pupilX, pupilY, this.r/4)
        pop()


        push()
        translate(this.pos.x, this.pos.y)
        rotate(this.vel.heading()/10)
        translate(-this.pos.x, -this.pos.y)
        //eye
        const iX = this.pos.x + this.r/2.5
        const iY = this.pos.y - this.r/2
        fill(200)
        ellipse(iX, iY, this.r/2)
        const pX = this.pos.x + this.r/2
        const pY = this.pos.y - this.r/2
        fill(0)
        ellipse(pX, pY, this.r/8)
        pop()
    }
}