class Section{
    constructor({numSegments, col, xStart, xEnd, yMiddle, maxHeight, startWidth, endWidth}){
        
        this.xStart = xStart
        this.xEnd = xEnd
        this.yMiddle = yMiddle
        this.stW = startWidth
        this.eW = endWidth
        this.maxHeight = maxHeight
        this.numSegments = numSegments
        this.col = col
        this.segments = this.generateSegments()
  
    }

    generateSegments(){
        const arr = []
        const totalLength = this.xEnd - this.xStart

        // just go equal to start
        const xPer = totalLength/this.numSegments
        
        // make a point - start
        // make another point
        // make a segment
        //second becomes first
        // make a point
        // 

        for(let idx = 0; idx < this.numSegments; idx++){
            //console.log(this.xStart + idx * xPer)
            let newP = createVector(this.xStart + idx * xPer, this.yMiddle - this.stW)
            //console.log(newP)
            let p1, p2, p3, p4
            let yOff = this.maxHeight/(2 + random(0.1, 1.0))
            if(idx === 0) {
                // p1 top left
                // p2 top right
                // p3 bottom left
                // p4 bottom right
                p1 = createVector(this.xStart, this.yMiddle - this.stW)
                p2 = createVector(this.xStart + (idx + 1) * xPer, this.yMiddle - yOff)
                p3 = createVector(this.xStart, this.yMiddle + this.stW)
                p4 = createVector(this.xStart + (idx + 1) * xPer, this.yMiddle + yOff)
            } else if(idx === this.numSegments.length - 1) {
                p1 = createVector(this.xStart + (idx + 1) * xPer, this.yMiddle - yOff)
                p2 = createVector(this.xEnd, this.yMiddle - this.eW)
                p3 = createVector(this.xStart + (idx + 1) * xPer, this.yMiddle + yOff)
                p4 = createVector(this.xEnd, this.yMiddle + this.eW)
            } else {
                p1 = createVector(this.xStart + (idx) * xPer, this.yMiddle - yOff)
                p2 = createVector(this.xStart + (idx + 1) * xPer, this.yMiddle - yOff)
                p3 = createVector(this.xStart + (idx) * xPer, this.yMiddle + yOff)
                p4 = createVector(this.xStart + (idx + 1) * xPer, this.yMiddle + yOff)
            }
            console.log(idx + 'p1:  ' + p1)
            console.log(idx + 'p2:  ' + p2)
            arr[idx] = new Segment(idx, p1, p2, p3, p4, this.col)
        }
        console.log(arr)
        return arr
    
    }

    render(){
        //console.log(this.segments)
            this.segments.forEach(segment => {
                segment.render()
            })
        

        // if(this.top && this.top.length > 0){
        //     this.top.forEach(segment => {
        //         segment.render()
        //     })
        // }

    }
}