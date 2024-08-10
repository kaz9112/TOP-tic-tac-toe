// =========================================
// Section 1: Define Gameboard
// =========================================

// create game cells on html
const createGameCell = (function () {
    const gameCell = document.createElement('div');
    gameCell.classList.add('game-cell');
    return gameCell;
});

// factory game cell
const createGameBoard = (function () {
    const gameBoardArray = ["","","","","","","","",""]
    const getBoardArray = () => gameBoardArray;
    return {getBoardArray};
})();

// Create the Gameboard
const gameBoard = createGameBoard.getBoardArray();

// =========================================
// Section 2: Define Players
// =========================================

// factory player
const newPlayer = (function (mark) {
    // create new array for choosen cells number
    const chosenCellsArray = [];

    // get the choosenCells
    const getCellsArray = () => chosenCellsArray;
    const markCells = (chosenCells) => chosenCellsArray.push(chosenCells);

    return {mark, getCellsArray, markCells};
});

// create Players
const playerX = newPlayer("X");
const playerO = newPlayer("O");


// =========================================
// Section 3: Gameplay
// =========================================

// factory for running the game
const gamePlay = (function (gameBoard) {
    // for loop how many turns are there
    for (let i = 0; i < 9; i++) {
        if ((i + 1) % 2 === 0) { // player O turn
            const choices = playerTurn(gameBoard)
            gameBoard[choices] = "O"
            if (winConditions(gameBoard, "O") === true) {
                return "O wins"
            }
        } else {  // player X turn
            const choices = playerTurn(gameBoard)
            gameBoard[choices] = "X"    
            if (winConditions(gameBoard, "X") === true) {
                return "X wins"
            }
        if (i == 8) {return "Draw"}
        } 
    }
});

// factory for the player turn
const playerTurn = (function (gameBoard) {
    // for debugging range for ~random number~ that eventualy become input
    const min = 0;
    const max = 8;
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    // while loop to try again for correct number
    while(gameBoard[randomNumber] !="") {
        randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log("wrong Number");
    }
    // console.log("correct number")
    return randomNumber;
});

// Winning conditions
const winConditions = (function (gameBoard, mark) {
    console.log(gameBoard)
    if (
        (mark === gameBoard[0] && gameBoard[0] === gameBoard[1] && gameBoard[0] === gameBoard[2]) ||
        (mark === gameBoard[3] && gameBoard[3] === gameBoard[4] && gameBoard[3] === gameBoard[5]) ||
        (mark === gameBoard[6] && gameBoard[6] === gameBoard[7] && gameBoard[6] === gameBoard[8]) ||
        (mark === gameBoard[0] && gameBoard[0] === gameBoard[3] && gameBoard[0] === gameBoard[6]) ||
        (mark === gameBoard[1] && gameBoard[1] === gameBoard[4] && gameBoard[1] === gameBoard[7]) ||
        (mark === gameBoard[2] && gameBoard[2] === gameBoard[5] && gameBoard[2] === gameBoard[8]) ||
        (mark === gameBoard[0] && gameBoard[0] === gameBoard[4] && gameBoard[0] === gameBoard[8]) ||
        (mark === gameBoard[2] && gameBoard[2] === gameBoard[4] && gameBoard[2] === gameBoard[6])
    ) {
        return true
    }
});

// run the game
console.log(gamePlay(gameBoard));