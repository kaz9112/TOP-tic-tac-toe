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
    const chosenCells = null;

    // get the choosenCells
    const getCellsArray = () => chosenCellsArray;
    const markCells = (chosenCells) => chosenCellsArray.push(chosenCells)

    return {mark, getCellsArray, markCells}
})

// create Players
const playerX = newPlayer("X")
const playerO = newPlayer("O")


// =========================================
// Section 3: Define Gameplay
// =========================================

// playerX.markCells(7)
// console.log(playerX.getCellsArray())

const turnLoop = (function () {
    for (let i = 1; i < 9; i++) {
        playerTurn(i)
    }
})

const playerTurn = (function (turnNumber) {
    if (turnNumber % 2 === 0) {
        // player O turns
        // console.log(turnNumber + "O")
        playerOoChoice(turnNumber)
    } else {
        // player X turns
        // console.log(turnNumber + "x")
        playerExChoice(turnNumber)
    }
})

const playerExChoice = (function (inputNumber) {
    // console.log(inputNumber)
    const choice = () => inputNumber;
    
    // return {choice}
});

const playerOoChoice = (function (inputNumber) {
    // console.log(inputNumber)
    const choice = () => inputNumber;
    // return {choice}
});

