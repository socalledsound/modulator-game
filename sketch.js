const bgCol = [60,20,60,120]
let game
let startButton

function startGame(){
  game = new Game()
  game.init()
  startButton.hide()
  loop()
}

function setup(){
  createCanvas(1000, 600)
  
  background(200)
  textSize(30)
  // text('sound lands', 100, 200)
  startButton = makeStartButton()
  noLoop()
}

function draw(){
  if(game && !game.over){
    translate(- game.count, 0)
    background(bgCol)
    game.update()
    game.render()
  } else {
    background(200)
    textSize(30)
    text('in the modulator', 100, 200)
    startButton.show()
  }
}

function mousePressed(){
  if(!game.player.schizo){
    game.player.boost()
  } else {
    game.schizoPlayers.forEach(sp => {
      sp.boost()
    })
  }
  
}

function makeStartButton(){
  const button = createButton('start')
  button.position(300, 300)
  button.style('padding', '2rem')
  button.style('border-radius', '0.9rem')
  button.style('font-size', '2rem')
  button.mousePressed(startGame)
  return button
}