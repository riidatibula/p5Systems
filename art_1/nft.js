const ART_SIZE = 750
let PALETTE = []

function setup() {
    createCanvas(800, 800, SVG)

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

    fill('#00296b')
    // drawOutline()
    noStroke()

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
    strokeWeight(1)
    push()
        translate(width/2, height/2)
        rect(0, 0, ART_SIZE, ART_SIZE)
    pop()
}