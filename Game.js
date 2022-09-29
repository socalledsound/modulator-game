class Game {
    constructor(){
        this.player = null
        this.level = null
        this.currentLevel = 0 
        this.gravity = createVector(0, 0.1)
        this.wind = createVector(-0.05, 0)
        this.friction = 0.98
        this.lines = []
        this.loseLine = 0
        this.over = null
        this.count = null
        this.inc = 0.5
        this.currentMax = 500
        this.numSchizos = 10
    }

    init(){
        this.schizoPlayers = null
        this.over = false
        this.count = 0
        this.player = new Player()
        this.level = new Level()
        //const lvl1 = new Level(LVL1_SECTION_DATA)
        //this.levels.push(lvl1)
        //let line1 = new Line(0,100, width * 10, 100)
        //let line2 = new Line(0, 400, width * 10, 400)
        //this.lines = [line1, line2]

        // let line2 = new Line(0, 400, width * 10, 400)
        // this.lines = [line2]
    }

    checkSchizos(){
        this.schizoPlayers.forEach(schizo => {
            if(schizo.pos.y > 1500){
                schizo.dead = true
            }
        })
          if(!this.schizoPlayers.map(item => item.dead).includes(false)){
                this.over = true
          }  
    }



    render(){
        if(this.player != null && !this.player.schizo){
            this.player.render()
        }
        if(this.schizoPlayers){
            this.schizoPlayers.forEach(sp => {
                sp.render()
            })
        }
        if(this.level){
            this.level.render()
        }
       
        // this.lines.forEach(line => {
        //     line.render()
        // })
        // if(this.levels && this.levels.length > 0){
        //     this.levels[this.currentLevel].render()
        // }
        
    }

    update(){

        if(this.player.pos.x > this.currentMax){
            this.count += this.inc * 3
            this.currentMax+= this.inc * 3
        } else {
            this.count+=this.inc
            this.currentMax += this.inc
        }


        if(this.player && !this.player.schizo){
            this.player.addForce(this.gravity)
            this.player.addForce(this.wind)
            this.player.vel.mult(this.friction)
            this.player.update()

            const loseVal = this.player.pos.x - this.count 
            //console.log(loseVal) 
             if(loseVal < 0){
                 if(!this.player.schizo){
                     this.over = true
                 }
                 
               }
        }
        if(this.schizoPlayers){
            this.checkSchizos()
            this.schizoPlayers.forEach(sp => {
                sp.addForce(this.gravity)
                sp.addForce(this.wind)
                sp.vel.mult(this.friction)
                sp.update()
            })
        }

        // this.lines.forEach(line => {
        //     line.getClosest(this.player)
        //     this.player.checkLineCollision(line)
        // })
        if(this.level){
            this.level.update()
        }
        





    //     const currLevel = this.levels[this.currentLevel]
    //     const currIdx = currLevel.currentSectionIdx
    //     const currSection = currLevel.sections[currIdx]
    //    console.log(currIdx)
    //     currSection.segments.forEach(segment => {
    //         this.player.checkWallCollision(segment)
    //     })
         
    }


}
