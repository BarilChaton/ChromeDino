const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

// setting up resolution.
const canvasWidth = 900
const canvasHeight = 400

// mika variables.

let yPosition = canvasHeight - 50

// mika object
const mika = {
    x: 50,
    y: yPosition,
    width: 100,
    height: 50,
}

// sprinkler object
let sprinklers = []

const sprinkler = {
    width: 35,
    height: 80,
}

// Loading the stuff.
window.onload = function() {
    canvas
    canvas.width = canvasWidth
    canvas.height = canvasHeight

    ctx.fillStyle="orange"
    ctx.fillRect(mika.x, mika.y, mika.width, mika.height)
}

