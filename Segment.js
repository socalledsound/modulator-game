class Segment {
    // 1 top left
    // 2 top right
    // 3 bottom left
    // 4 bottom right
    constructor(idx, p1, p2, p3, p4, col1, col2){
        this.id = idx
        this.p1 = p1
        this.p2 = p2
        this.p3 = p3
        this.p4 = p4
        // this.col = col
        this.line1 = new Line(p1.x, p1.y, p2.x, p2.y, col1)
        this.line2 = new Line(p3.x, p3.y, p4.x, p4.y, col2)
        this.lines = [this.line1, this.line2]
    }

    render(){
        //console.log(this.col)
        // stroke(this.col)
        // strokeWeight(3)
        this.lines.forEach(l => {
            l.render()
        })
        
        fill(230,230,230,20)
        noStroke()
        beginShape()
            vertex(this.p1.x, this.p1.y)
            vertex(this.p2.x, this.p2.y)
            vertex(this.p3.x, this.p3.y)
            vertex(this.p4.x, this.p4.y)
        endShape()
        // line(this.p1.x, this.p1.y, this.p2.x, this.p2.y)
        // line(this.p3.x, this.p3.y, this.p4.x, this.p4.y)
    }

    update(){
        this.lines.forEach(line => {
            if(line.p1.x < game.count + width && line.p2.x > game.count){
                if(!game.player.schizo){
                    line.getClosest(game.player)
                }else{
                    game.schizoPlayers.forEach(sp => {
                        line.getClosest(sp)
                    })
                }
            }
            if(!game.player.schizo){
                game.player.checkLineCollision(line)
            }else{
                game.schizoPlayers.forEach(sp => {
                    sp.checkLineCollision(line)
                })
            }
            
            
        })
    }
}