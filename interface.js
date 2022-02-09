let input1 = document.querySelector("input#player1"); // Indentifies the scoreboard elements
let input2 = document.querySelector("input#player2");
let enter = document.querySelector("input#enter");
let score1 = document.querySelector("h2#p1");
let score2 = document.querySelector("h2#p2");


let squares = document.querySelectorAll(".sqr"); // Identifies the squares

squares.forEach((square) => { // Makes every square interactive
    square.addEventListener('click', handleClick);
})

function handleClick(event){ // Deals with every click in the squares
    let square = event.target; //Defines the square
    let position = square.id; // Defines the square position
    if(handleMove(position)){ // Checks is there's a winner
        if(playerTime == 0){
            playerTime = player1.value;
            wins1++;
            scoreBoard();
        }else{
            playerTime = player2.value;
            wins2++;
            scoreBoard();
        }
        setTimeout(()=> { // Sets a delay to show the move first and then the winner 
            alert(`The game is over, ${playerTime} is the winner!`);
        }, 10);
    };
    updateSquare(position); // Updates the square
    //updateSquares();
}

function updateSquare(position){ // Shows the symbol
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}' style="display: block;"></div>`; // Adds the class of the symbol in the square
}

function showSequence(pos1,pos2,pos3){
    // squares.forEach((square) => {
    //     square.style = "background-color: green";
    // })
     let square1 = document.getElementById(pos1); // Winner squares
     let square2 = document.getElementById(pos2);
     let square3 = document.getElementById(pos3);
     square1.style = "background-color: darkred"; // Green background for the winner sequence
     square2.style = "background-color: darkred";
     square3.style = "background-color: darkred";  
}

let buttom = document.querySelector("div#reset"); // Declaring reset variables
buttom.addEventListener('click', resetBoard);

function resetBoard(){ // Reset function to restart the game
    let squares = document.querySelectorAll(".sqr");
    squares.forEach((square) => { //Clears the squares
        let position = square.id;
        board[position] = '';
        square.innerHTML = '';
        square.style = "background-color: rgb(225, 207, 159)";
    })
    gameOver = false; // Inicial states
    playerTime = 1;
    moves = 0;
}

function scoreBoard(){ // Updates and shows the scoreboard
    let player1 = input1.value; // Gets the players nicks
    let player2 = input2.value;
    input1.style = "display: none"; // Hides the inputs
    input2.style = "display: none";
    enter.style = "display: none";
    score1.innerHTML = `${player1} : ${wins1}`; // Shows the score
    score2.innerHTML = `${player2} : ${wins2}`;
    score1.style = "font-size: 35px; margin-left: 2px"; // Adapts the style
    score2.style = "font-size: 35px; margin-left: 280px;";
    if(innerWidth < 1450 && innerWidth > 1030){ // Responsive style
        score1.style = "font-size: 35px; margin-left: 2px"; 
        score2.style = "font-size: 35px; margin-left: 260px;";
    }if(innerWidth < 1030 && innerWidth > 780){
            score1.style = "font-size: 30px; margin-left: 2px;"; 
            score2.style = "font-size: 30px; margin-left: 150px;";
    }if(innerWidth < 780 && innerWidth > 430){
            score1.style = "font-size: 25px; margin-left: 2px;"; 
            score2.style = "font-size: 25px; margin-left: 110px;";
    }if(innerWidth < 430 && innerWidth > 380){
            score1.style = "font-size: 30px; margin-left: 2px;"; 
            score2.style = "font-size: 30px; margin-left: 40px;";
    }if(innerWidth < 380 && innerWidth > 330){
            score1.style = "font-size: 25px; margin-left: 2px;"; 
            score2.style = "font-size: 25px; margin-left: 30px;";
    }if(innerWidth < 330){
            score1.style = "font-size: 22px; margin-left: 2px;";
            score2.style = "font-size: 22px; margin-left: 20px;";
    }
}