// Initialize game variables
let currentPlayer = 'X';
let gameStatus = ['', '', '', '', '', '', '', '', ''];
const winningCombinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

// Get all game squares and add event listener for player moves
const gameSquares = document.querySelectorAll('.game-square');
gameSquares.forEach(square => {
  square.addEventListener('click', () => {
    // Update game status and display player move
    const squareIndex = square.getAttribute('id');
    if (gameStatus[squareIndex] === '') {
      gameStatus[squareIndex] = currentPlayer;
      square.innerText = currentPlayer;
      checkWin();
      // Switch to next player's turn
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  })
});

// Check if the game has been won
function checkWin() {
  winningCombinations.forEach(combination => {
    if (gameStatus[combination[0]] !== '' &&
        gameStatus[combination[0]] === gameStatus[combination[1]] &&
        gameStatus[combination[1]] === gameStatus[combination[2]]) {
      alert(`${currentPlayer} wins!`);
      resetGame();
    }
  });
  // Check for a tie game
  if (!gameStatus.includes('')) {
    alert('Tie game!');
    resetGame();
  }
}

// Reset the game board and variables
function resetGame() {
  gameStatus = ['', '', '', '', '', '', '', '', ''];
  gameSquares.forEach(square => square.innerText = '');
  currentPlayer = 'X';
}
