const CRYSTAL_SIZE = 500
const SIDES = 6
let PALETTE = []

function setup() {
    createCanvas(530, 530, SVG)

    PALETTE = [
        color(255, 52, 154),
        color(4, 0, 152),
        'limegreen',
        'teal'
    ]

    noLoop()
    angleMode(DEGREES)
    rectMode(CENTER)
}

function draw() {
    // testLines()
    drawOutline()
    simpleLines()
}

function drawOutline() {
    noFill()
    stroke(getRandomPalette())
    strokeWeight(getRandomNumber(1, 4))
    const hexagonTrue = getRandomNumber(0, 2)

    push()
        translate(width/2, height/2)
        if (hexagonTrue) {
            hexagon(0, 0, CRYSTAL_SIZE/2)   
        } else {
            ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE)
        }
    pop()
}

function testLines() {
    let numShapes = getRandomNumber(0, 2) ? SIDES : SIDES*2

    push()
        noFill()
        translate(width/2, height/2)

        stroke(getRandomPalette())
        ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE)

        let angle = 360 / numShapes
        stroke(getRandomPalette())
        for ( let i = 0; i < numShapes; i++ ) {
            line(0, 0, 0, CRYSTAL_SIZE/2)
            rotate(angle)    
        }
    pop()
}

function simpleLines() {
    const stepsOut = 8
    const numSteps = getRandomNumber(0, 2) ? stepsOut : floor(stepsOut * 1.25)
    const step = (CRYSTAL_SIZE / 2) / numSteps
    const start = getRandomNumber(0, numSteps)
    const stop = getRandomNumber(start, numSteps + 1)

    let numShapes = getRandomNumber(0, 2) ? SIDES : SIDES*2
    let angle = 360 / numShapes
        
    noFill()
    stroke(getRandomPalette())

    push()
        translate(width/2, height/2)
        for ( let i = 0; i < numShapes; i++ ) {
            line(start * step, 0, stop * step, 0)
            rotate(angle)    
        }
    pop()
}
