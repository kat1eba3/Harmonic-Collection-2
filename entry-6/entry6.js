const gameContainer = document.querySelector('.game-container');
const subway = document.querySelector('.snake-subway');
const food = document.querySelector('.food');

let subwayX = 0;
let subwayY = 0;
let foodX, foodY;
let direction = 'right';

function updateFoodPosition() {
    foodX = Math.floor(Math.random() * 20) * 20;
    foodY = Math.floor(Math.random() * 20) * 20;
    food.style.left = foodX + 'px';
    food.style.top = foodY + 'px';
}

function updateSubwayPosition() {
    if (direction === 'right') {
        subwayX += 20;
    } else if (direction === 'left') {
        subwayX -= 20;
    } else if (direction === 'up') {
        subwayY -= 20;
    } else if (direction === 'down') {
        subwayY += 20;
    }

    subway.style.left = subwayX + 'px';
    subway.style.top = subwayY + 'px';
}

function checkCollision() {
    if (subwayX === foodX && subwayY === foodY) {
        updateFoodPosition();
    }
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp' && direction !== 'down') {
        direction = 'up';
    } else if (event.key === 'ArrowDown' && direction !== 'up') {
        direction = 'down';
    } else if (event.key === 'ArrowLeft' && direction !== 'right') {
        direction = 'left';
    } else if (event.key === 'ArrowRight' && direction !== 'left') {
        direction = 'right';
    }
});

updateFoodPosition();
setInterval(() => {
    updateSubwayPosition();
    checkCollision();
}, 200);
