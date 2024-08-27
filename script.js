
const gameController = (function () {
    // =========================================
    // Section 1: Define Gameboard
    // =========================================

    // function game board array
    const createGameBoard = (function () {
        const gameBoardArray = ["","","","","","","","",""]
        const getBoardArray = () => gameBoardArray;
        
        // create game grid on html
        const createGameGrid = (function () {
            const gameGrid = document.querySelector(".game-grid")
            for (let i = 0; i < 9; i++) {
                const gameCell = document.createElement("div");
                gameCell.classList.add("game-cell");

                gameCell.dataset.number = i
                gameGrid.appendChild(gameCell)
                }    
        })();
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

        // create current score
        let score = 0;

        // get the choosenCells
        const getCellsArray = () => chosenCellsArray;
        const markCells = (chosenCells) => chosenCellsArray.push(chosenCells);

        // create function to add and get score
        const addScore = () => score++;
        const getScore = () => score;

        return {mark, getCellsArray, markCells, addScore, getScore};
    });

    // create Players
    const playerX = newPlayer("X");
    const playerO = newPlayer("O");


    // =========================================
    // Section 3: Gameplay 
    // =========================================

    // factory for running the game
    const gamePlay = (function (gameBoard) {

        const gameCells = document.querySelectorAll(".game-cell");

        let turnStats = 0;

        gameCells.forEach(function(gameCell) {
            gameCell.addEventListener('click', function() {
                console.log("clicked")
                if ((turnStats + 1) % 2 === 0) { // player O turn
                    gameBoard[gameCell.dataset.number] = "O"
        
                    const marked = document.createElement("h1")
                    marked.textContent = "O"
        
                    gameCell.appendChild(marked)
        
                    if (winConditions(gameBoard, "O") === true) {
                        turnStats = 0
                        console.log("O wins")
                    }
                    turnStats++;
                } else {  // player X turn
                    gameBoard[gameCell.dataset.number] = "X"
        
                    const marked = document.createElement("h1")
                    marked.textContent = "X"
        
                    gameCell.appendChild(marked)
        
                    if (winConditions(gameBoard, "X") === true) {
                        turnStats = 0
                        return "X wins"
                    }
                    turnStats++;
                }
                if (turnStats == 8) {
                    turnStats = 0
                    console.log("X wins")
                }     
            })
            
        })
    });


    // TODO: make winConditions inside playerTurn

    // factory for the player turn
    // const playerTurn = (function (gameBoard, gameCells) {

    //     // for debugging range for ~random number~ that eventualy become input
    //     // const min = 0;
    //     // const max = 8;
    //     // let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;


    //     // while loop to try again for correct number
    //     while(gameBoard[randomNumber] !="") {
    //         // randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    //         // console.log("wrong Number");
    //     }
    //     // console.log("correct number")
    //     return randomNumber;
    // });

    // Winning conditions
    const winConditions = (function (gameBoard, mark) {
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
})();



