let board = ['', '', '','', '', '','', '', '']; //Board
let playerTime = 1; // Defines who's the player: 0/1
let gameOver = false; // Checks if the game is over
let moves = 0; // Number of player moves
let wins1 = 0, wins2 = 0; // Number of player wins

let symbols = ['o', 'x']; // Player 0 and 1
let winStates = [ //Victory conditions
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

function handleMove(position){ // Makes a move
    if(gameOver){ // Checks if there's a winner
        return;
    }
    if(board[position] == ''){ //Checks if there is no player in the square
        moves++;
        board[position] = symbols[playerTime]; //Inserts the symbols
        gameOver = isWin(); // Defines if there's a winner with the move
        playerTime = (playerTime == 0) ? 1:0; // Changes the player to the next move
    }
    return gameOver; //Checks if there's a winner with the move
}

function isWin(){ // Checks if there's a winner
    for(let i = 0; i<winStates.length; i++){ // Goes through the possibilities of win
        let seq = winStates[i];
        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];

        if( board[pos1] == board[pos2] && // Victory states
            board[pos1] == board[pos3] &&
            board[pos1] != ''){
                showSequence(pos1,pos2,pos3); // Shows de winner sequence
                return true;
            }
    }
    if(moves == 9){
        setTimeout(() => {
            alert("It's a tie!");
        },10);
    }
    return false;
}
