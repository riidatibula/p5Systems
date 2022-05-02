const ART_SIZE = 750
const CANVAS_SIZE = 800
let PALETTE = []

function setup() {
    createCanvas(CANVAS_SIZE, CANVAS_SIZE, SVG)

    PALETTE_LIST = [
        [
            '#033f63',
            '#28666e',
            '#7c9885',
            'grey'
        ],
        [
            'grey',
            '#ee6c4d',
            '#fb8500',
            '#293241',
        ]
    ]

    noLoop()
    angleMode(DEGREES)
    rectMode(CENTER)
}

function draw() {
    drawOutline()
    strokeWeight(1)

    const circle_size = 50
    const hoz_circles = ART_SIZE / circle_size
    const ver_circles = ART_SIZE / circle_size

    let x = ((width-ART_SIZE)/2) + (circle_size/2)
    let y = ((width-ART_SIZE)/2) + (circle_size/2)

    for (j = 1; j <= ver_circles; j++) {
        for (i = 1; i <= hoz_circles; i++) {
            push()
                nestedCircles(x*i, y*j, circle_size, 4, PALETTE_LIST[i%2], false)
            pop()
        }
        PALETTE_LIST.reverse()
    }
}

function drawOutline() {
    fill('#395B64')
    strokeWeight(3)
    push()
        translate(width/2, height/2)
        rect(0, 0, ART_SIZE+5, ART_SIZE+5)
    pop()
}