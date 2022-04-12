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

function getRandomPalette() {
    return PALETTE[floor(
        getRandomNumber(0, PALETTE.length))]
}

function getRandomNumber(min, max) {
    return floor(random(min, max))
}