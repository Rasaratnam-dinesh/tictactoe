console.log('hello from main.js');

let cellsEl = document.querySelectorAll('.cell');
console.log(cellsEl);
let msgEl =  document.querySelector('#msg');

let playerStick = ['X','0'];
let currentPlayer = 0;
let end = false;
let winner = false;

function showMsg(msg){
    msgEl.innerHTML = msg;
    msgEl.style.display= 'block';
}

const hideMsg = () => {
    msgEl.innerHTML= '';
    msgEl.style.display= 'none';
}

const verify = () => {
    let found = false

    if (
        cellsEl[0].innerHTML == playerStick[currentPlayer] &&
        cellsEl[1].innerHTML == playerStick[currentPlayer] &&
        cellsEl[3].innerHTML == playerStick[currentPlayer]
    ) {
        winner = currentPlayer;
        console.log(currentPlayer + "win!");
        
    }
    if(!winner === false){
        console.log('Enter no winner !')
        cellsEl.forEach(cellsEl => {
            if (cellsEl.innerHTML == ''){
            found = true;
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

        if(event.target.innerHTML ==''){
            event.target.innerHTML = playerStick[currentPlayer];

            verify();

            if(!end){
                if(currentPlayer == 0){
                    currentPlayer = 1;
                } else {
                    currentPlayer = 0;
                }
            } else {
                showMsg('Game ended!');
            }
        } else {
            showMsg('Already Played !')
        }
        
    });
});


