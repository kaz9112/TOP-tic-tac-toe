const min = 0;
const max = 8;
let i = 0
gameBoard = ["","","","","","","","",""]

let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
// console.log(gameBoard)
// console.log(randomNumber)
while(i < 10) {
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    // console.log("wrong Number")
    console.log(gameBoard[randomNumber] =="")
    i++
}