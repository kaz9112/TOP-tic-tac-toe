// Game Module
const gameModule = (function() {

    // create single game cell
    const createGameCell = (function () {
        const gameCell = document.createElement('div');
        gameCell.classList.add('game-cell');
        return gameCell
    });
    
    // initialize multiple game cell inside the game board
    const initGameCell = (function () {
        const gameBoard = document.querySelector('.game-board')
        // create textRow div
        if (gameBoard) { // check whether game board exist or not
            for (let i = 0; i < 9; i++) {
                gameBoard.appendChild(createGameCell()); //append gameboard with new child which is returned from createGameCell
            }
        }

    });
    
    // initialize Game Cell
    initGameCell()


})();


