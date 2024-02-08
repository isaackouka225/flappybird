document.addEventListener('DOMContentLoaded', () => {
    const bird = document.querySelector('.bird');
    const gameContainer = document.querySelector('.game-container');
    const ground = document.querySelector('.ground-moving');
    const scoreDisplay = document.getElementById('score');

    let birdLeft = 220;
    let birdBottom = 500;
    let gravity = 3;
    let isGameOver = false;
    let gap = 430;
    let score = 0;

  function startGame() {
    if (isGameOver) return;
    birdBottom -= gravity;
    bird.style.bottom = birdBottom + 'px';
    bird.style.left = birdLeft + 'px';

    // Vérifier la collision avec les obstacles
    const obstacles = document.querySelectorAll('.obstacle');
    obstacles.forEach(obstacle => {
        if (
            (birdBottom <= obstacle.clientHeight + obstacle.offsetTop && birdBottom >= obstacle.offsetTop) &&
            (birdLeft + bird.clientWidth >= obstacle.offsetLeft && birdLeft <= obstacle.offsetLeft + obstacle.clientWidth)
        ) {
            gameOver(); // Arrêter le jeu en cas de collision
        }
    });

    if (birdBottom >= 580 || birdBottom <= 0) {
        gameOver();
    }
}

    let gameTimerId = setInterval(startGame, 20);

    function control(e) {
        if (e.type === "click" || (e.type === "keydown" && e.code === "Space")) {
            jump();
        }
    }

    function jump() {
        if (!isGameOver && birdBottom < 580) {
            birdBottom += 50;
            bird.style.bottom = birdBottom + 'px';
        }
    }

    document.addEventListener("keydown", control);
    document.getElementById("play").addEventListener("click", control);
    document.addEventListener("click", control); // Ajout de l'écouteur de clic

    function generateObstacle() {
        function createObstacle() {
            let obstacleRight = 1200;
            let randomHeight = Math.random() * 150;
            let obstacleBottom = randomHeight;

            const obstacle = document.createElement('div');
            const topObstacle = document.createElement('div');
            obstacle.classList.add('obstacle');
            topObstacle.classList.add('topObstacle');
            gameContainer.appendChild(obstacle);
            gameContainer.appendChild(topObstacle);
            obstacle.style.right = obstacleRight + 'px';
            topObstacle.style.right = obstacleRight + 'px';
            obstacle.style.bottom = obstacleBottom + 'px';
            topObstacle.style.bottom = obstacleBottom + gap + 'px';
            obstacle.style.backgroundImage = "url('asset/flappybird-pipe.png')";
            topObstacle.style.backgroundImage = "url('asset/flappybird-pipe.png')";

            function moveObstacle() {
                obstacleRight -= 2;
                obstacle.style.right = obstacleRight + 'px';
                topObstacle.style.right = obstacleRight + 'px';

                if (obstacleRight < -60) {
                    clearInterval(obstacleInterval);
                    gameContainer.removeChild(obstacle);
                    gameContainer.removeChild(topObstacle);
                    score++;
                    scoreDisplay.innerText = score;
                }
            }

            let obstacleInterval = setInterval(moveObstacle, 20);
        }

        setInterval(createObstacle, 2000);
    }

    generateObstacle();

    function gameOver() {
        clearInterval(gameTimerId);
        isGameOver = true;
        alert('Game Over! Your score: ' + score);
    }
});
