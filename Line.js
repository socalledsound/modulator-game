class Line {
    constructor(x1,y1, x2, y2, col){
        this.p1 = createVector(x1, y1)
        this.p2 = createVector(x2, y2)
        this.normal = this.calculateNormal()
        this.closest = null
        this.active = false
        this.col = col
        this.activeCol = 'yellow'
        this.freq = random(100,700)
    }
  
      // takes in two ends of a line as vectors
    calculateNormal(){
        let baseDelta = p5.Vector.sub(this.p2, this.p1)
        baseDelta.normalize()
        let normal = createVector(-baseDelta.y, baseDelta.x)
        return normal

    }

    getDot(cx, cy, cr, x1, y1, x2, y2){
        let len = dist(x1, y1, x2, y2)
        return ( ((cx-x1)*(x2-x1)) + ((cy-y1)*(y2-y1)) ) / pow(len,2);
        
    }
  
  getClosest(ball){
    const dot = this.getDot(ball.pos.x, ball.pos.y, ball.r, this.p1.x, this.p1.y, this.p2.x, this.p2.y)
    const closestX =  this.p1.x + (dot * (this.p2.x-this.p1.x));
    const closestY =  this.p1.y + (dot * (this.p2.y-this.p1.y));

    const onSegment = this.linePoint(this.p1.x, this.p1.y, this.p2.x, this.p2.y, closestX, closestY)
    if(!onSegment){
      return false
    }else{
      this.closest = createVector(closestX, closestY)
    }
    // need the line/point algorithm here.

    // if(closestX > this.p1.x && closestX < this.p2.x &&
    //   closestY > this.p1.y && closestY < this.p2.y){
      
    //     console.log(this.closest)
    // } else {
    //     console.log(closestX, closestY)
    // }
    
    
}


  linePoint(x1, y1, x2, y2, px, py){
    const d1 = dist(px, py, x1, y1)
    const d2 = dist(px, py, x2, y2)
    const len = dist(x1, y1, x2, y2)
    const buf = 0.1
    if(d1 + d2 >= len - buf && 
      d1 + d2 <= len + buf){
        return true
      }else{
        return false
      }
  }


    reset = () => {
      this.active = false
    }
  
      render(){
        if(this.active){
          stroke(this.activeCol)
        }else {
          stroke(this.col)
        }
        
        strokeWeight(30)
        line(this.p1.x, this.p1.y, this.p2.x, this.p2.y)
        
        if(this.closest){
            fill('red')
            noStroke()
            ellipse(this.closest.x, this.closest.y, 10)
        }
     

        // stroke('green')
        // line(this.closest.x, this.closest.y, this.closest.x - (this.normal.x * 100), this.closest.y - (this.normal.y * 100), )
        

    }

}