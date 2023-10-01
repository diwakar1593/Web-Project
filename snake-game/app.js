//Constants
const snakeBody = [
    { x: 11, y: 11 }
]
const board = document.querySelector('#board')
let SNAKE_SPEED = 5
let food = getNewFood()
let inputDir = lastDir = { x: 0, y: 0 }
let dead = false
let lastRenderTime = 0

//event listners
window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowUp':
            if (lastDir.y !== 0) break
            inputDir = { x: 0, y: -1 }
            break
        case 'ArrowDown':
            if (lastDir.y !== 0) break
            inputDir = { x: 0, y: 1 }
            break
        case 'ArrowLeft':
            if (lastDir.x !== 0) break
            inputDir = { x: -1, y: 0 }
            break
        case 'ArrowRight':
            if (lastDir.x !== 0) break
            inputDir = { x: 1, y: 0 }
            break
    }
})

//functions
function outSideGrid(position) {
    return (
        position.x < 1 || position.x > 21 ||
        position.y < 1 || position.y > 21
    )
}

function snakeIntersection() {
    return onSnake(snakeBody[0], { ignoreHead: true })
}

function gameOver() {
    dead = outSideGrid(snakeBody[0]) || snakeIntersection()
}

function onSnake(food, { ignoreHead = false } = {}) {
    return snakeBody.some((element, index) => {
        if (ignoreHead && index === 0) return false
        return equalPositions(element, food)
    })
}

function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y
}

function getInputDirection() {
    lastDir = inputDir
    return inputDir
}

function getFood() {
    return {
        x: Math.floor(Math.random() * 21) + 1,
        y: Math.floor(Math.random() * 21) + 1
    }
}

function getNewFood() {
    let newFoodPos
    while (newFoodPos == null || onSnake(newFoodPos)) {
        newFoodPos = getFood()
    }
    return newFoodPos
}

function updateSnake() {
    const inputDirection = getInputDirection()
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] }
    }

    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y

    gameOver()
}

function drawSnake(gameBoard) {
    gameBoard.innerHTML = ""
    snakeBody.forEach((element, index) => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = element.y
        snakeElement.style.gridColumnStart = element.x
        if (index === 0) {
            snakeElement.classList.add('head')
        } else {
            snakeElement.classList.add('snake')
        }
        gameBoard.appendChild(snakeElement)
    });
}


function updateFood() {
    if (onSnake(food)) {
        snakeBody.unshift({ x: snakeBody[0].x + inputDir.x, y: snakeBody[0].y + inputDir.y })
        food = getNewFood()
        SNAKE_SPEED += 0.5
    }
}

function drawFood(gameBoard) {
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)
}

function gameEngine() {
    updateSnake()
    updateFood()
    drawSnake(board)
    drawFood(board);
}

function main(currentTime) {
    if (dead) {
        if (confirm('You Loose Press ok to restart!!')) {
            window.location = '/'
        }
        return
    }
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return

    lastRenderTime = currentTime

    gameEngine()
}

//Game loop
window.requestAnimationFrame(main)

