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

    let margin = (CANVAS_SIZE - ART_SIZE) / 2
    let x = margin
    let y = margin

    for (; y <= CANVAS_SIZE-margin; ) {
        x1 = sin(pow(y, 2))
        y1 = cos(pow(x, 2)) 

        push()
            translate(width/2, height/2)
            circle(x1 ,y1, 1)
        pop()
        x+=20

        if (x > ART_SIZE + margin) {
            x = margin
            y+=20
        }
    }
}

function drawOutline() {
    push()
        noStroke()
        translate(width/2, height/2)
        rect(0, 0, ART_SIZE, ART_SIZE)
    pop()
}