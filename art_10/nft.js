const ART_SIZE = 750
const CANVAS_SIZE = 800
let PALETTE = []

function setup() {
    createCanvas(CANVAS_SIZE, CANVAS_SIZE, SVG)

    PALETTE = [
        '#003049',
        '#d62828',
    ]

    noLoop()
    angleMode(DEGREES)
    rectMode(CENTER)
}

function draw() {
    drawOutline()
    strokeWeight(1)

    let circleSize = 5
    let circleCount = ART_SIZE / circleSize
    let x = (CANVAS_SIZE - ART_SIZE) / 2
    let y = (CANVAS_SIZE - ART_SIZE) / 2
    let xMax = x + ART_SIZE
    let yMax = y + ART_SIZE

    while (y <= yMax) {
        while (x <= xMax) {
            point(x, y)
            x+=circleSize
        }
        x = (CANVAS_SIZE - ART_SIZE) / 2
        y+=circleSize
    }

    
}


function drawOutline() {
    push()
        translate(width/2, height/2)
        rect(0, 0, ART_SIZE, ART_SIZE)
    pop()
}