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

// playerX.markCells(7)
// console.log(playerX.getCellsArray())

const turnLoop = (function (gameBoard, playerX, playerO) {
    for (let i = 0; i < 9; i++) {

        const [turn, mark] = playerTurn(i, playerX, playerO)
        gameBoard[turn] = mark
    }
});

const playerTurn = (function (turnNumber, playerX, playerO) {
    if ((turnNumber + 1) % 2 === 0) {
        // player O turns
        // console.log(turnNumber + "O")
        return [turnNumber, "O"];
    } else {
        // player X turns
        // console.log(turnNumber + "x")
        return [turnNumber, "X"];
    }
});

turnLoop(gameBoard, playerX, playerO)