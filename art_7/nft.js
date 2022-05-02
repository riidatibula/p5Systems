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
    noStroke()

    for (i = 0; i < 500; i++) {
        let x = getRandomNumber(25, 775)
        let y = getRandomNumber(25, 775)
        let palette = color(getRandomPalette(PALETTE))
        palette.setAlpha(100)
        fill(palette)
        circle(x, y, 50)
    }

    drawFrame()
}


function drawFrame() {
    rectMode(CORNER)
    fill('#fffff')

    push()
        noStroke()
        rect(0, 0, 25, CANVAS_SIZE)
        rect(0, 0, CANVAS_SIZE, 25)
        rect(0, CANVAS_SIZE-25, CANVAS_SIZE, 25)
        rect(CANVAS_SIZE-25, 0, 25, CANVAS_SIZE)
    pop()
}

function drawOutline() {
    push()        
        translate(width/2, height/2)
        rect(0, 0, CANVAS_SIZE, CANVAS_SIZE)
    pop()

    push()        
        translate(width/2, height/2)
        rect(0, 0, ART_SIZE, ART_SIZE)
    pop()    
}