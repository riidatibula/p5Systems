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

    let square_width_list = [50, 70, 100, 130, 170, 230]
    let square_height = 50
    let x = (width-ART_SIZE) / 2
    let y = (width-ART_SIZE) / 2 + (square_height/2)

    for (j = 0; j < 15; j++) {
        square_width_list = shuffle(square_width_list)
        for (i = 0; i < 6; i++) {
            let square_width = square_width_list[i]
            x+= square_width / 2
            push()
                nestedRect(x, y, square_width,
                    square_height, 5, PALETTE, true)
            pop()
            x = x + (square_width / 2)
        }
        x = (width-ART_SIZE) / 2
        y+= square_height
    }
}

function drawOutline() {
    // fill('#395B64')
    strokeWeight(10)
    push()
        translate(width/2, height/2)
        rect(0, 0, ART_SIZE, ART_SIZE)
    pop()
}