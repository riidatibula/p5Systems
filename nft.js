const ART_SIZE = 460
let PALETTE = []

function setup() {
    createCanvas(500, 500, SVG)

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
    drawOutline()

    push()
        translate(width/2, height/2)
        trippleEquiTriangle(0, 0, 100)
    pop()
}

function drawOutline() {
    push()
        translate(width/2, height/2)
        rect(0, 0, ART_SIZE, ART_SIZE)
    pop()
}