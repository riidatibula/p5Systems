function hexagon (posX, posY, radius) {                     
    const rotAngle = 360 / 6
    beginShape()
    for (let i = 0; i < 6; i++) {
        const thisVertex = pointOnCircle(posX, posY, radius, i * rotAngle)
        vertex(thisVertex.x, thisVertex.y)
    }
    endShape(CLOSE)
}

function equiTriangle(posX, posY, height, color) {
    color ? fill(color) : noFill()

    const length = height / (sqrt(3)/2)
    const p1 = [posX, posY-((2/3)*height)]
    const p2 = [posX-(length/2), posY+((1/3)*height)]
    const p3 = [posX+(length/2), posY+((1/3)*height)]

    triangle(p1[0], p1[1], p2[0], p2[1], p3[0], p3[1])
}

function tripleEquiTriangle(posX, posY, height, palette) {
    let weight = height / 3

    for (; height > 0; height-=weight ) {
        let color = palette ? getRandomPalette(palette): null
        equiTriangle(posX, posY, height, color)
    }
}

function tripleCircle(posX, posY, diameter, palette) {
    let weight = diameter / 3

    for (; diameter > 0; diameter-=weight ) {
        palette ? fill(getRandomPalette(palette)): noFill()
        circle(posX, posY, diameter)
    }
}

function denseCircle(posX, posY, diameter, palette) {
    palette ? fill(getRandomPalette(palette)): noFill()
    const radius = diameter / 2

    circle(posX, posY, diameter)

    fill('red')
    stroke('#f5b342')
    strokeWeight(0.4)
    for (i = 0; i < 1500; i++) {
        const vertex1 = pointOnCircle(
            posX, posY,
            radius-1,
            random(1, 361))
        const vertex2 = pointOnCircle(
            posX, posY,
            random(1, radius),
            random(1, 361))
        line(vertex1.x, vertex1.y, vertex2.x, vertex2.y)
    }
}

function pointOnCircle (posX, posY, radius, angle) {
    const x = posX + radius * cos(angle)
    const y = posY + radius * sin(angle)
    return createVector(x, y)
}

function getRandomPalette(palette) {
    return PALETTE[floor(
        getRandomNumber(0, PALETTE.length))]
}

function getRandomNumber(min, max) {
    return floor(random(min, max))
}