console.log('hello from main.js');

let cellsEl = document.querySelectorAll('.cell');
let msgEl =  document.querySelector('#msg');

let playerStick =['<img src="images/X.png" alt="X">', '<img src="images/O.jpg" alt="O">'];
let playerName = ['player 1' , 'player 2'];
let playerScore = [
    localStorage.getItem('player0'),
    localStorage.getItem('player1')
];
let currentPlayer = 0;
let end = false;
let winner = false;

let namePlayer1El = document.querySelector("#player1 .name");
namePlayer1El.innerHTML = playerName[0];
let namePlayer2El = document.querySelector("#player2 .name");
namePlayer2El.innerHTML = playerName[1];

let scorePlayer1El = document.querySelector("#player1 .score");
let scorePlayer2El = document.querySelector("#player2 .score");
scorePlayer1El.innerHTML = playerScore[0];
scorePlayer2El.innerHTML = playerScore[1];

function showMsg(msg){
    msgEl.innerHTML = msg;
    msgEl.style.display= 'block';
}

const hideMsg = () => {
    msgEl.innerHTML= '';
    msgEl.style.display= 'none';
}

const verify = () => {
    let found = true

    if (
        cellsEl[0].innerHTML == playerStick[currentPlayer] &&
        cellsEl[1].innerHTML == playerStick[currentPlayer] &&
        cellsEl[2].innerHTML == playerStick[currentPlayer] ||
        cellsEl[3].innerHTML == playerStick[currentPlayer] &&
        cellsEl[4].innerHTML == playerStick[currentPlayer] &&
        cellsEl[5].innerHTML == playerStick[currentPlayer] ||
        cellsEl[6].innerHTML == playerStick[currentPlayer] &&
        cellsEl[7].innerHTML == playerStick[currentPlayer] &&
        cellsEl[8].innerHTML == playerStick[currentPlayer]
    ) {
        winner = currentPlayer;
        
        console.log(currentPlayer + "win!");
    }

    if (
        cellsEl[0].innerHTML == playerStick[currentPlayer] &&
        cellsEl[3].innerHTML == playerStick[currentPlayer] &&
        cellsEl[6].innerHTML == playerStick[currentPlayer] ||
        cellsEl[1].innerHTML == playerStick[currentPlayer] &&
        cellsEl[4].innerHTML == playerStick[currentPlayer] &&
        cellsEl[7].innerHTML == playerStick[currentPlayer] || 
        cellsEl[2].innerHTML == playerStick[currentPlayer] &&
        cellsEl[5].innerHTML == playerStick[currentPlayer] &&
        cellsEl[8].innerHTML == playerStick[currentPlayer]
    ) {
        winner = currentPlayer;
        console.log(currentPlayer + "  win!");
    }

    if (
        (cellsEl[0].innerHTML == playerStick[currentPlayer] &&
        cellsEl[4].innerHTML == playerStick[currentPlayer] &&
        cellsEl[8].innerHTML == playerStick[currentPlayer]) ||
        (cellsEl[2].innerHTML == playerStick[currentPlayer] &&
        cellsEl[4].innerHTML == playerStick[currentPlayer] &&
        cellsEl[6].innerHTML == playerStick[currentPlayer])
    ) {
        winner = currentPlayer;
        console.log(currentPlayer + " wins!");
    }
    if(!winner === false){
        console.log('Enter no winner !')
        cellsEl.forEach(cellsEl => {
            if (cellsEl.innerHTML == ''){
            found = false;
            }
        });
    }
    console.log(found,winner);
    if(!found || winner !== false){
        end = true;
    }
};

cellsEl.forEach(cellsEl => {
    cellsEl.addEventListener('click', function (event){
        
            hideMsg();
            if (event.target.innerHTML ==''){
                event.target.innerHTML = playerStick[currentPlayer];
    
                verify();
    
                if(!end){
                    if(currentPlayer == 0){
                        currentPlayer = 1;
                    } else {
                        currentPlayer = 0;
                    }
                } else {
                    if (winner === false) {
                        showMsg('game ended - no winners!')
                    } else {
                        if ( currentPlayer === 0) {
                            
                            scorePlayer1El.innerHTML = ++playerScore[currentPlayer];
                        } else {
                            scorePlayer2El.innerHTML = ++playerScore[currentPlayer];
                        }
                    showMsg('Game ended! ' + winner + '  win!');
                
                    }
                }
                
            } else {
                    showMsg('Already Played !');
            }  
        
             
    });
});


