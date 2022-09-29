// again need to know the walls.  sit it on a wall.

class Splitter{
    constructor(x, y){
        this.pos = createVector(x, y)
        this.r = 60
        this.col = [0,220,20, 250]
        this.triggered = false
    }

    trigger(){
        if(!this.triggered){
            this.triggered = true
            
            game.schizoPlayers = Array.from({length: 10}, (e, idx) => {
                return new SchizoPlayer(idx, game.player.pos.x, game.player.pos.y )
            })
            game.player.schizo = true
        }

    }

    render(){
        if(!this.triggered){
            fill(this.col)
            ellipse(this.pos.x, this.pos.y, this.r)
            fill(220)
            ellipse(this.pos.x, this.pos.y, this.r - 4)
            fill(this.col)
            ellipse(this.pos.x, this.pos.y, this.r - 6)
            fill(220)
            ellipse(this.pos.x, this.pos.y, this.r - 8)
            fill(this.col)
            ellipse(this.pos.x, this.pos.y, this.r - 12)
        }

    }
}