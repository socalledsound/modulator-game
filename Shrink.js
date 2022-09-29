// again need to know the walls.  sit it on a wall.

class Shrink{
    constructor(x, y){
        this.pos = createVector(x, y)
        this.r = 40
        this.col = [210,80,120, 220]
        this.triggered = false
    }

    trigger(){
        if(!this.triggered && game.player.r > 30){
            this.triggered = true
            game.player.r -= 30
            game.player.bumpSpeed *= 4
            game.player.shrunken
        }

    }

    render(){
        if(!this.triggered){
            fill(this.col)
            ellipse(this.pos.x, this.pos.y, this.r)
            fill(0)
            ellipse(this.pos.x, this.pos.y, this.r - 4)
            fill(this.col)
            ellipse(this.pos.x, this.pos.y, this.r - 6)
            fill(0)
            ellipse(this.pos.x, this.pos.y, this.r - 8)
            fill(this.col)
            ellipse(this.pos.x, this.pos.y, this.r - 12)
        }

    }
}