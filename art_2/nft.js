const ART_SIZE = 750
const CANVAS_SIZE = 800
let PALETTE = []

function setup() {
    createCanvas(CANVAS_SIZE, CANVAS_SIZE, SVG)

    PALETTE_LIST = [
        [
            '#033f63',
            '#28666e',
            '#7c9885'
        ],
        [
            '#ee6c4d',
            '#fb8500',
            '#293241'
        ]
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
                tripleCircle(x*i, y*j, circle_size, PALETTE_LIST[i%2], false)
            pop()
        }
        PALETTE_LIST.reverse()
    }
}

function drawOutline() {
    fill('teal')
    strokeWeight(1)
    push()
        translate(width/2, height/2)
        rect(0, 0, CANVAS_SIZE, CANVAS_SIZE)
    pop()
}