class Level {
    constructor(){
        // this.data = data
        // console.log(data)
        // this.completed = false
        // this.sections = this.data.sections.map( item => {
        //     return new Section(item)
        // })
        // this.currentSectionIdx = 0
        let count = 0
        this.xValues = Array.from({length: 100}, (el, idx) => {
            const old = count
            count += random(90,220)
            return old
        })
        this.y1Values = Array.from({length: 100}, (el, idx) =>{
            return random(0, 250)
        })
        this.y2Values = Array.from({length: 100}, (el, idx) =>{
            return random(350, 600)
        })

        this.segments = Array.from({length: 98}, (el, idx) => {
                let rc1 = [random(255), random(255), random(255), 120]
                let rc2 = [random(255), random(255), random(255), 120]
                let p1 = createVector(this.xValues[idx], this.y1Values[idx])
                let p2 = createVector(this.xValues[idx + 1], this.y1Values[idx + 1])
                let p3 = createVector(this.xValues[idx], this.y2Values[idx])
                let p4 = createVector(this.xValues[idx + 1], this.y2Values[idx + 1])
            return new Segment(idx, p1, p2, p3, p4, rc1, rc2)
        })
        this.grows = Array.from({length: 20}, (el, idx) => {
            return new Grow(idx * random(500,1200), 300)
        })
        this.shrinks = Array.from({length: 20}, (el, idx) => {
            return new Shrink(idx * random(300,1000), 300)
        })
       
        this.entities = this.grows.concat(this.shrinks)

        this.entities.push(new Splitter(2000, 300))

        this.osc = new p5.Oscillator('sine')
        this.osc.amp(0.0)
        this.osc.start()
        this.modulator = new p5.Oscillator('sawtooth');
        this.modulator.start();
      
        // add the modulator's output to modulate the carrier's frequency
        this.modulator.disconnect();
        this.osc.freq(this.modulator);
        // this.envelope = new p5.Envelope(0.01,1.0,0.1,0.0)
  
        this.sosc = Array.from({length: 10}, () => {
            let osc = new p5.Oscillator('sine')
            let mod = new p5.Oscillator('sawtooth');
            mod.start()
            mod.disconnect()
            osc.amp(0.0)
            osc.freq(mod)
            osc.start()
            return ({
                o: osc,
                m: mod
            })
        })
        this.freqs = Array.from({length: 20}, (el, idx) => {
            const fund = 120
            return fund * (2 + idx/4)
        })

        // this.slowOscArr = Array.from({length: 6}, () => {

        // })
        this.delay = new p5.Delay()


        this.snare = new p5.Noise()
        this.delay.process(this.snare, 0.12, .7, 2300);
        this.snare.amp(0)
        this.snare.start()
        this.count = 0
        
            this.snare.amp(0.25)
            setTimeout(this.stopSnare, 500)
    
    }

    render(){
        
        this.segments.forEach(segment => {
            segment.render()
        })
        this.entities.forEach(entity => {
            entity.render()
        })
    }

    stopSnare = () => {
        this.snare.amp(0)
        //this.snare.stop()
    }

    update(){
        this.count++
        if(this.count % 120 === 0){
            this.snare.amp(0.25)
            setTimeout(this.stopSnare, 250)
        }
        if(this.count % 30 === 0){
            if(random(100) > 75){
                this.snare.amp(0.5)
                setTimeout(this.stopSnare, 10)
            }
            
        }
        this.segments.forEach(segment => {
            segment.update()
        })
        this.entities.forEach(entity => {
            if(!game.player.schizo){
                game.player.checkCircleCollision(entity)
            } else {
                game.schizoPlayers.forEach(sp => {
                    sp.checkCircleCollision(entity)
                })
            }
            
        })
    }
}