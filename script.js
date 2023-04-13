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
let images = ['../images/face_1.png', '../images/face_2.png', '../images/face_3.png', '../images/face_4.png', '../images/face_5.png', '../images/face_6.png'];
let currentPlayer1 = 0;
let pictureDice = document.createElement("img");
let divDice = document.getElementById("container_Dice");
function getRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
};
function newGame() {
    alert('coucou !');
};

function rollDice() {
    let returnRandomNumber = getRandomNumber();
    if (returnRandomNumber === 2) {
        pictureDice.src = images[1];
        divDice.innerHTML = '';
        divDice.appendChild(pictureDice);
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
    }
}