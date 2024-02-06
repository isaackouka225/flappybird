document.addEventListener('DOMContentLoaded', () => {
  // État et variables du jeu
  const bird = document.querySelector('.bird');
  const gameDisplay = document.querySelector('.game-display');
  const ground = document.querySelector('.ground-moving');

  let birdLeft = 220;
  let birdBottom = 100;
  let gravity = 3;
  let isGameOver = false;
  let gap = 430;
  let score = 0;
  
  // Fonctions du jeu
  function startGame() {
      birdBottom -= gravity;
      bird.style.bottom = birdBottom + 'px';
      bird.style.left = birdLeft + 'px';
      if (isGameOver) return;
      // définir la position de l'oiseau au début de la partie
  }
  let gameTimerId = setInterval(startGame, 20);

  function control(e) {
      if (e.type === "click" || (e.type === "keydown" && e.code === "Space")) {
          jump();
      }
         
      // utiliser e (event) pour cibler la barre espace
      // Mots clés qu'on avait trouvé pour faire une recherche 
      // sur comment cibler un espace : "key, space, eventListeners"

      // quand la touche de contrôle est utilisée, l'oiseau saute (jump())
  }

  function jump() {
      if (birdBottom < 500) {
          birdBottom += 50;
          bird.style.bottom = birdBottom + 'px';
      }
      // attention à bien faire en sorte que l'oiseau 
      // ne puisse sauter que quand il n'a pas dépassé le border-top

      // changer le style bottom du bird, pour changer sa position
  }
  document.addEventListener("keydown", control);
  document.getElementById("play").addEventListener("click", control);

  function generateObstacle() {
      let obstacleLeft = 500;
      let randomHeight = Math.random() * 150; /* mettre une hauteur random */
      let obstacleBottom = randomHeight;

      // générer les obstacles avec document.createElement('div')
      const obstacle = document.createElement('div');
      const topObstacle = document.createElement('div');
      obstacle.classList.add('obstacle');
      topObstacle.classList.add('topObstacle');
      gameDisplay.appendChild(obstacle);
      gameDisplay.appendChild(topObstacle);
      obstacle.style.left = obstacleLeft + 'px';
      topObstacle.style.left = obstacleLeft + 'px';
      obstacle.style.bottom = obstacleBottom + 'px';
      topObstacle.style.bottom = obstacleBottom + gap + 'px';

      // si la partie continue, ajouter des obstacles
      obstacle.style.backgroundImage = "url('assets/flappybird-pipe.png')";
      topObstacle.style.backgroundImage = "url('assets/flappybird-pipe.png')";
      
      // créer une fonction qui bouge l'obstacle vers la gauche à chaque frame
      function moveObstacle() {
          obstacleLeft -= 2; 
          obstacle.style.left = obstacleLeft + 'px';
          topObstacle.style.left = obstacleLeft + 'px';

          // Si l'obstacle est hors de la vue, le supprimer et générer un nouveau
          if (obstacleLeft < -60) {
              gameDisplay.removeChild(obstacle);
              gameDisplay.removeChild(topObstacle);
              score++; // augmenter le score ici si nécessaire
              generateObstacle();
          }
      }
      setInterval(moveObstacle, 20);
  }
  generateObstacle();
  
  function gameOver() {
      // mettre tout ce qu'on avait en arrêt : notre timer...
      clearInterval(gameTimerId);
      // informer notre code qu'on est en game over
      isGameOver = true;
      // informer notre utilisateur qu'on est en game over
      alert('Game Over! Your score: ' + score);
      // on ne devrait plus pouvoir bouger
  }
});