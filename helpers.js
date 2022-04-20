function hexagon (posX, posY, radius) {                     
    const rotAngle = 360 / 6
    beginShape()
    for (let i = 0; i < 6; i++) {
        const thisVertex = pointOnCircle(posX, posY, radius, i * rotAngle)
        vertex(thisVertex.x, thisVertex.y)
    }
    endShape(CLOSE)
}

function equiTriangle(posX, posY, radius) {
    const p1 = [posX-radius, posY+radius]
    const p2 = [posX, posY-radius]
    const p3 = [posX+radius, posY+radius]

    triangle(p1[0], p1[1], p2[0], p2[1], p3[0], p3[1])
}

function pointOnCircle (posX, posY, radius, angle) {         
    const x = posX + radius * cos(angle)
    const y = posY + radius * sin(angle)
    return createVector(x, y)
}

function getRandomPalette() {
    return PALETTE[floor(
        getRandomNumber(0, PALETTE.length))]
}

function getRandomNumber(min, max) {
    return floor(random(min, max))
}