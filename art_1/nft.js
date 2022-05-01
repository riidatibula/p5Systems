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

    const circle_size = 50
    const hoz_circles = ART_SIZE / circle_size
    const ver_circles = ART_SIZE / circle_size

    let x = ((width-ART_SIZE)/2) + (circle_size/2)
    let y = ((width-ART_SIZE)/2) + (circle_size/2)

    for (j = 1; j <= ver_circles; j++) {
        for (i = 1; i <= hoz_circles; i++) {
            push()
                tripleCircle(x*i, y*j, circle_size, PALETTE)
            pop()
        }
    }
}

function drawOutline() {
    fill('#395B64')
    strokeWeight(1)
    push()
        translate(width/2, height/2)
        rect(0, 0, CANVAS_SIZE, CANVAS_SIZE)
    pop()
}