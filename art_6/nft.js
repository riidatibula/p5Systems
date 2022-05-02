const ART_SIZE = 750
const CANVAS_SIZE = 800
const SUN_DIAMETER = 300
let PALETTE = []

function setup() {
    createCanvas(CANVAS_SIZE, CANVAS_SIZE, SVG)

    PALETTE = [
        '#00a8e8'
    ]

    noLoop()
    angleMode(DEGREES)
    rectMode(CENTER)
}

function draw() {
    drawOutline()
    drawSun()
    drawWater()
    drawCloud()
}

function drawSun() {
    push()
        strokeWeight(2)
        stroke('#f5b342')
        translate(width/2, width/2)
        circle(0, 0, 300)

        strokeWeight(1)
        for (i = 180; i < 360; i++) {
            const vertex = pointOnCircle(
                0, 0, SUN_DIAMETER/2, i)
            line(vertex.x, vertex.y, 0, 0)
        }
    pop()
}

function drawWater() {
    push()
        translate(width/2, ((height/2) + (ART_SIZE/4)))
        fill('aqua')
        rect(0, 0, ART_SIZE, ART_SIZE/2)
        denseRect(0, 0, ART_SIZE, ART_SIZE/2, PALETTE)
    pop()


    strokeWeight(2)
    stroke('#ffa500')
    let length = SUN_DIAMETER
    let x1 = (width / 2) - (length / 2)
    let y1 = (height / 2) + 5
    let x2 = x1 + length
    let y2 = y1
    let shortening_factor = 8

    strokeWeight(1)
    for (i = 0; i < 18; i++) {
        line(x1, y1, x2, y2)
        length-=shortening_factor
        x1+=shortening_factor
        y1+=6
        x2-=shortening_factor
        y2+=6
    }
}

function drawCloud() {
    makeCloud(120, 200)
    makeCloud(600, 170)
    makeCloud2(600, 170)
}

function drawOutline() {
    push()
        fill('#023047')
        translate(width/2, height/2)
        rect(0, 0, CANVAS_SIZE-17, CANVAS_SIZE-17)
    pop()

    push()
        // strokeWeight(3)
        fill('#e0fbfc')
        translate(width/2, height/2)
        rect(0, 0, ART_SIZE, ART_SIZE)
    pop()
}