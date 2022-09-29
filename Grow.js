// again need to know the walls.  sit it on a wall.

class Grow{
    constructor(x, y){
        this.pos = createVector(x, y)
        this.r = 40
        this.triggered = false
    }

    trigger(){
        if(!this.triggered && game.player.r < 50){
            this.triggered = true
            game.player.r += 30
            game.player.bumpSpeed /= 2
        }

    }

    render(){
        if(!this.triggered){
            fill(0)
            ellipse(this.pos.x, this.pos.y, this.r)
            fill(255)
            ellipse(this.pos.x, this.pos.y, this.r - 4)
            fill(0)
            ellipse(this.pos.x, this.pos.y, this.r - 6)
            fill(255)
            ellipse(this.pos.x, this.pos.y, this.r - 8)
            fill(0)
            ellipse(this.pos.x, this.pos.y, this.r - 12)
        }

    }
}