const ART_SIZE = 750
const CANVAS_SIZE = 800
let PALETTE = []

function setup() {
    createCanvas(CANVAS_SIZE, CANVAS_SIZE, SVG)

    PALETTE = [
        '#7897AB',
        // '#7897AB'
    ]

    noLoop()
    angleMode(DEGREES)
    rectMode(CENTER)
}

function draw() {
    drawOutline()

    background('#655D8A')
    noStroke()

    let cicleColor = color('#D885A3')
    // cicleColor.setAlpha(50)
    

    // let size = 50
    // let length = 10
    let count = 3

    for (j = 0; j < 100; j++){
        let x = random(0, ART_SIZE)
        let y = random(0, ART_SIZE)

        let size = random (10, 50)
        let length = size / 5
        
        fill(cicleColor)
        circle(x, y, size)

        let decorColor = color(getRandomPalette(PALETTE))
        decorColor.setAlpha(90)
        fill(decorColor)

        for (i = 0; i < count; i++) {
            let vertex = pointOnCircle(x, y, size/2, random(0, 360))
            ellipse(vertex.x, vertex.y, size, length)
        }
    }

    drawFrame(ART_SIZE, CANVAS_SIZE)  
}

function drawOutline() {
    push()
        translate(width/2, height/2)
        rect(0, 0, ART_SIZE, ART_SIZE)
    pop()
}