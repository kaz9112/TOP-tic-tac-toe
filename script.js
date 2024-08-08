// create single game cell
const createGameCell = (function () {
    const gameCell = document.createElement('div');
    gameCell.classList.add('game-cell');
    return gameCell;
});

const createGameBoard = (function () {
    const gameBoardArray = ["","","","","","","","",""]
    const getBoardArray = () => gameBoardArray;
    return {getBoardArray};
})();

const updateGameBoard = (function () {
    
})

const playerTurn = (function (turnNumber) {
    if (turnNumber % 2 === 0) {
        // player O turns
        console.log("Player O turns")
    } else {
        // player X turns
        console.log("Player X Turn")
    }
})

const turnLoop = (function () {
    for (let i = 1; i < 9; i++) {
        playerTurn(i)
    }
})