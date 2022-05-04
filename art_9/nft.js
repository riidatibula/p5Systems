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

    const circleSize = 30
    const totalSlotSize = 50
    const margin = 100
    const circlesCount = (ART_SIZE - (margin*2)) / totalSlotSize
    const verCircles = ART_SIZE / totalSlotSize
    let x = ((CANVAS_SIZE-ART_SIZE)/2) + margin
    let y = ((CANVAS_SIZE-ART_SIZE)/2) + margin

    for (j = 0; j <= circlesCount; j++) {
        for (i = 0; i <= circlesCount; i++) {
            push()
                translate(x, y)
                let circle1 = getRandomNumber(0, 2)
                if (circle1 == 0) {
                    noStroke()
                    fill(getRandomPalette(PALETTE))
                    circle(0, 0, circleSize)
                    stroke('black')
                } else if (circle1 == 1) {
                    stripedCircle(0, 0, circleSize, null, 10)
                }

                let vertex = pointOnCircle(0, 0, circleSize/6, random(0, 360))
                let circle2 = getRandomNumber(0, 2)
                if (circle2 == 0) {
                    fill(getRandomPalette(PALETTE))
                    nestedCircles(vertex.x, vertex.y, circleSize, 10, null, null)
                } else if (circle2 == 1){
                    stripedCircle(vertex.x, vertex.y, circleSize, null, 10)
                }
            pop()
            x+=totalSlotSize
        }
        x = ((CANVAS_SIZE-ART_SIZE)/2) + margin
        y+=totalSlotSize
    }
}


function drawOutline() {
    push()
        let frameColor = color('#023047')
        fill(frameColor)

        translate(width/2, height/2)
        rect(0, 0, CANVAS_SIZE, CANVAS_SIZE)
    pop()

    push()
        let color1 = color('#eae2b7')
        fill(color1)

        translate(width/2, height/2)
        rect(0, 0, ART_SIZE, ART_SIZE)
    pop()
}