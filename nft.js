const ART_SIZE = 750
let PALETTE = []

function setup() {
    createCanvas(800, 800, SVG)

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
        // tripleCircle(0, 0, 100, PALETTE)
        // tripleEquiTriangle(0, 0, 100, PALETTE)
        denseCircle(0, 0, 300)
    pop()
}

function drawOutline() {
    push()
        translate(width/2, height/2)
        rect(0, 0, ART_SIZE, ART_SIZE)
    pop()
}