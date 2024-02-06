document.addEventListener('DOMContentLoader', () => {
    // État et variables du jeu
    const bird = document.querySelector('.bird')
    const gameDisplay = document.querySelector('.game-display')
    const ground = document.querySelector('.ground-moving')
  
    let birdLeft = 220
    let birdBottom = 100
    let gravity = 3
    let isGameOver = false
    let gap = 430
    let score = 0
    
    // Fonctions du jeu
    function startGame() {
      // définir la position de l'oiseau au début de la partie
    }
    let gameTimerId = setInterval(startGame, 20)
  
    function control(e) {
      // utiliser e (event) pour cibler la barre espace
      // Mots clés qu'on avait trouvé pour faire une recherche 
      // sur comment cibler un espace : "key, space, eventListeners"
  
      // quand la touche de contrôle est utilisée, l'oiseau saute (jump())
    }
  
    function jump() {
      // attention à bien faire en sorte que l'oiseau 
      // ne puisse sauter que quand il n'a pas dépassé le border-top
  
      // changer le style bottom du bird, pour changer sa position
    }
    document.addEventListener(/* barre espace */_, control)
  
    function generateObstacle() {
      let obstacleLeft = 500
      let randomHeight = 0 /* mettre une hauteur random */
      let obstacleBottom = randomHeight
  
      // générer les obstacles avec document.createElement('div')
  
      // si la partie continue, ajouter des obstacles
  
      // créer une fonction qui bouge l'obstacle vers la gauche à chaque frame
    }
  
    function gameOver() {
      // mettre tout ce qu'on avait en arrêt : notre timer...
      // informer notre code qu'on est en game over
      // informer notre utilisateur qu'on est en game over
      // on ne devrait plus pouvoir bouger
    }
  })