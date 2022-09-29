// if this guy intersects with player it gets stuck on player and adds drag
// it should follow the path, slowly
// maybe get the midpoint path of the whole level?
class Spiney {
    constructor(x, y, r){
        this.pos = createVector(x, y)
        this.r = r
        this.vel = createVector(-0.1,0)
    }

    render(){
        
    }

    update(){
        this.pos.add(this.vel)
    }
}