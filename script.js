// La possibilité de créer une nouvelle partie
// - La possibilité de retenir le score courant
// - La possibilité de lancer le dé
// - La possibilité d’avoir 2 joueurs

// Règles :
// Le jeu comprend 2 joueurs sur un seul et même écran.
// Chaque joueur possède un score temporaire (ROUND) et un score global (GLOBAL).
// À chaque tour, le joueur a son ROUND initialisé à 0 et peut lancer un dé autant de fois qu'il le souhaite. Le
// résultat d’un lancer est ajouté au ROUND.
// Lors de son tour, le joueur peut décider à tout moment de:
// - Cliquer sur l’option “Hold”, qui permet d’envoyer les points du ROUND vers le GLOBAL. Ce sera alors le
// tour de l’autre joueur.
// - Lancer le dé. S’il obtient un 1, son score ROUND est perdu et c’est la fin de son tour.
// Le premier joueur qui atteint les 100 points sur global gagne le jeu.
const images = ['../images/face_1.png', '../images/face_2.png', '../images/face_3.png', '../images/face_4.png', '../images/face_5.png', '../images/face_6.png'];
const pictureDice = document.createElement("img");
const divDice = document.getElementById("container_Dice");
const currentScoreJ1 = document.getElementById("current_score_j1");
const currentScoreJ2 = document.getElementById("current_score_j2");
const currentPlayer1 = document.getElementById('total_score_j1');
const currentPlayer2 = document.getElementById('total_score_j2');
const changeColorPlayer1 = document.getElementById('round_player1')
const changeColorPlayer2 = document.getElementById('round_player2')
const disableRoll = document.getElementById('roll_dice');
disableRoll.style.display = "none";
const disableHold = document.getElementById('hold');
disableHold.style.display = "none";
let returnRandomNumber = 0;
let roundPlayer = "player1";
// let changeColorPlayer;
let scoreInProgress = 0;
let totalCurrentScore = 0;
let totalScoreJ1 = 0;
let totalScoreJ2 = 0;

function getRandomNumber() {
    returnRandomNumber = Math.floor(Math.random() * 6) + 1;
    return returnRandomNumber;
};

function resetScore() {
    totalScoreJ1 = 0;
    totalScoreJ2 = 0;
    totalCurrentScore = 0;
    scoreInProgress = 0;
    currentPlayer1.textContent = 0;
    currentPlayer2.textContent = 0;
}

function newGame() {
    alert('Joueur 1 commence !');
    changeColorPlayer1.style.color = "red";
    disableRoll.style.display = "block";
    disableHold.style.display = "block";
    resetScore();
};

function endGame() {
    if (totalScoreJ1 >= 100) {
        alert(`${roundPlayer} a gagné !`);
        alert('Joueur 2 commence !')
        resetScore();
        roundPlayer = 'player2';
    } else if (totalScoreJ2 >= 100) {
        alert(`${roundPlayer} a gagné !`);
        alert('Joueur 1 commence !');
        resetScore();
        roundPlayer = 'player1';
    }
};


function rollDice() {
    getRandomNumber();
    getDice();
    currentScore();
}

function hold() {
    if (roundPlayer === 'player1') {
        currentScoreJ1.textContent = 0;
        totalScoreJ1 += totalCurrentScore;
        currentPlayer1.textContent = totalScoreJ1;
        endGame();
        roundPlayer = 'player2'
        totalCurrentScore = 0;
        scoreInProgress = 0;
        changeColorPlayer1.style.color = "black";
        changeColorPlayer2.style.color = "red";
    } else {
        currentScoreJ2.textContent = 0;
        totalScoreJ2 += totalCurrentScore;
        currentPlayer2.textContent = totalScoreJ2;
        endGame();
        roundPlayer = 'player1'
        totalCurrentScore = 0;
        scoreInProgress = 0;
        changeColorPlayer1.style.color = "red";
        changeColorPlayer2.style.color = "black";
    }
}

//Fonction pour alimenter le current score en fonction du joeur actif
function currentScore() {
    if (returnRandomNumber !== 1) {
        if (roundPlayer === 'player1') {
            scoreInProgress += returnRandomNumber;
            totalCurrentScore = scoreInProgress;
            currentScoreJ1.textContent = totalCurrentScore;
        } else {
            scoreInProgress += returnRandomNumber;
            totalCurrentScore = scoreInProgress;
            currentScoreJ2.textContent = totalCurrentScore;
        }
    }
}

// getDice insert la bonne image du dé en fonction du nombre aléatoire générer au click du boutton Roll Dice
function getDice() {
    if (returnRandomNumber === 2) {
        pictureDice.src = images[1];  //Prendre la bonne image dans le tableau
        divDice.innerHTML = ''; //Vider le champs html avant chaque insertion
        divDice.appendChild(pictureDice); //Créer le nouveau champs html avec l'image
    } else if (returnRandomNumber === 3) {
        pictureDice.src = images[2];
        divDice.innerHTML = '';
        divDice.appendChild(pictureDice);
    }
    else if (returnRandomNumber === 4) {
        pictureDice.src = images[3];
        divDice.innerHTML = '';
        divDice.appendChild(pictureDice);
    }
    else if (returnRandomNumber === 5) {
        pictureDice.src = images[4];
        divDice.innerHTML = '';
        divDice.appendChild(pictureDice);
    }
    else if (returnRandomNumber === 6) {
        pictureDice.src = images[5];
        divDice.innerHTML = '';
        divDice.appendChild(pictureDice);
    }
    else {
        pictureDice.src = images[0];
        divDice.innerHTML = '';
        divDice.appendChild(pictureDice);
        if (roundPlayer == 'player1') {
            alert('Vous avez fait 1, au tour du joueur 2');
            totalCurrentScore = 0;
            scoreInProgress = 0;
            currentScoreJ1.textContent = 0;
            currentScoreJ2.textContent = 0;
            roundPlayer = 'player2'
            changeColorPlayer1.style.color = "black";
            changeColorPlayer2.style.color = "red";
        } else {
            alert('Vous avez fait 1, au tour du joueur 1');
            totalCurrentScore = 0;
            scoreInProgress = 0;
            currentScoreJ1.textContent = 0;
            currentScoreJ2.textContent = 0;
            roundPlayer = 'player1'
            changeColorPlayer1.style.color = "red";
            changeColorPlayer2.style.color = "black";
        }
    }
}