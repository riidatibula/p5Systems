const ART_SIZE = 750
const CANVAS_SIZE = 800
let PALETTE = []

function setup() {
    createCanvas(CANVAS_SIZE, CANVAS_SIZE, SVG)

    PALETTE = [
        '#003049',
        '#d62828',
        '#f77f00',
        '#fcbf49',
        '#eae2b7'
    ]

    noLoop()
    angleMode(DEGREES)
    rectMode(CENTER)
}

function draw() {
    drawOutline()
    drawBubbles()
    drawFrame(ART_SIZE, CANVAS_SIZE)
}

function drawBubbles() {
    noStroke()
    for (i = 0; i < 1000; i++) {
        let x = getRandomNumber(25, 775)
        let y = getRandomNumber(25, 775)
        let palette = color(getRandomPalette(PALETTE))
        palette.setAlpha(50)
        fill(palette)
        circle(x, y, 5)
    }
}

function drawOutline() {
    push()
        noStroke()
        translate(width/2, height/2)
        nestedRect(0, 0, ART_SIZE, ART_SIZE, 30, PALETTE, true)
    pop()    
}