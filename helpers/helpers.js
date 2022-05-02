function hexagon (posX, posY, radius, palette) {
    palette ? fill(getRandomPalette(palette)): noFill()
    const rotAngle = 360 / 6

    beginShape()
    for (let i = 0; i < 6; i++) {
        const thisVertex = pointOnCircle(posX, posY, radius, i * rotAngle)
        vertex(thisVertex.x, thisVertex.y)
    }
    endShape(CLOSE)
}

function ergoHex (posX, posY, radius, palette) {
    palette ? fill(getRandomPalette(palette)): noFill()                     
    const rotAngle = 360 / 6

    beginShape()
    for (let i = 0; i < 6; i++) {
        const thisVertex = pointOnCircle(posX, posY, radius, i * rotAngle)
        vertex(thisVertex.x, thisVertex.y)
    }
    endShape(CLOSE)

    beginShape(LINES)
        stroke('black')
        strokeWeight(1)
        const vertex1 = pointOnCircle(posX, posY, radius, 300)
        const vertex2 = pointOnCircle(posX, posY, radius, 240)
        const vertex3 = pointOnCircle(posX, posY, radius, 120)
        const vertex4 = pointOnCircle(posX, posY, radius, 60)

        vertex(vertex1.x, vertex1.y)
        vertex(vertex2.x, vertex2.y)

        vertex(vertex2.x, vertex2.y)
        vertex(posX, posY)

        vertex(vertex3.x, vertex3.y)
        vertex(posX, posY)

        vertex(vertex4.x, vertex4.y)
        vertex(vertex3.x, vertex3.y)
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

function nestedCircles(posX, posY, diameter, nest, palette, random) {
    let weight = diameter / nest
    let i = 0

    for (;diameter > 0; diameter-=weight, i++) {
        if (palette) {
            random ? fill(getRandomPalette(palette)): fill(palette[i])
        } else {
            noFill()
        }
        circle(posX, posY, diameter)
    }
}

function nestedRect(posX, posY, width, length, nest, palette, random) {
    // random - check if the pallete should be in random order
    // pallete - the actual pallete

    let width_weight = width / nest
    let length_weight = length / nest

    for (k = 0; k < nest; k++) {
        if (palette) {
            random ? fill(getRandomPalette(palette)): fill(palette[i])
        } else {
            noFill()
        }
        rect(posX, posY, width, length)
        width-=width_weight
        length-=length_weight
    }
}

function denseCircle(posX, posY, diameter, palette) {
    palette ? fill(getRandomPalette(palette)) : noFill()
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

function denseRect(posX, posY, width, length, palette) {
    let x1 = posX - (width / 2)
    let y1 = posY - (length / 2)
    let x2 = x1
    let y2 = y1
    let max_x = posX + (width / 2)
    let max_y = posY + (length / 2)

    while (x1 < max_x) {
        palette ? stroke(getRandomPalette(palette)) : noStroke()
        y1 < max_y ? y1+=5 : x1+=5
        x2 < max_x ? x2+=5 : y2+=5
        line(x1, y1, x2, y2)
    }
}

function makeCloud(posX, posY) {
    fill(250)
    noStroke()
    ellipse(posX, posY, 60, 50);
    ellipse(posX + 30, posY - 10, 60, 50);
    ellipse(posX + 80, posY, 60, 50);
    ellipse(posX + 20, posY + 20, 60, 50);
    ellipse(posX + 60, posY + 15, 60, 50);
}

function makeCloud2(posX, posY) {
    fill(250)
    noStroke()
    ellipse(posX, posY, 70, 50)
    ellipse(posX + 10, posY + 10, 70, 50)
    ellipse(posX - 20, posY + 10, 70, 50)
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

//shuffles the elements of an array
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}