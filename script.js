// =========================================
// Section 1: Define Gameboard
// =========================================

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
const gameBoard = createGameBoard.getBoardArray()

// =========================================
// Section 2: Define Players
// =========================================

// factory player
const newPlayer = (function (mark) {
    // create new array for choosen cells number
    const chosenCellsArray = [];

    // get the choosenCells
    const getCellsArray = () => chosenCellsArray;
    const markCells = (chosenCells) => chosenCellsArray.push(chosenCells)

    return {mark, getCellsArray, markCells}
})

// create Players
const playerX = newPlayer("X")
const playerO = newPlayer("O")


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
        } else {  // player X turn
            const choices = playerTurn(gameBoard)
            gameBoard[choices] = "X"    
        }
        // gameBoard[turn] = mark            
    }
    console.log(gameBoard)
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
        console.log("wrong Number")
    }
    // console.log("correct number")
    return randomNumber
});

// run the game
gamePlay(gameBoard)