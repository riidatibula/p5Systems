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
    strokeWeight(1)

    const hexSize = 25
    const hexRadius = hexSize / 2
    const hozHex = ART_SIZE / hexSize
    const verHex = ART_SIZE / (hexSize-3)
    let x = ((width-ART_SIZE)/2) + (hexSize/2)
    let y = ((width-ART_SIZE)/2) + (hexSize/2)

    for (j = 1; j <= verHex; j++) {
        for (i = 1; i <= hozHex; i++) {
            push()
                ergoHex(x, y, hexRadius, PALETTE)
                x+=hexSize
            pop()
        }
        x = ((width-ART_SIZE)/2) + (hexSize/2)
        y+=(hexSize-3)
    }
}

function drawOutline() {
    push()
        strokeWeight(3)
        fill('#395B64')
        translate(width/2, height/2)
        rect(0, 0, ART_SIZE+2, ART_SIZE)
    pop()
}