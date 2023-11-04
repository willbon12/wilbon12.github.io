// Variables to keep track of the game state
let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];

// Define win conditions
const winConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
];

// Function to handle a player's move
function handleMove(cell, index) {
    if (board[index] === '' && !isGameOver()) {
        cell.textContent = currentPlayer;
        board[index] = currentPlayer;
        cell.classList.add(currentPlayer.toLowerCase()); // Add 'x' or 'o' class to the cell
        if (!isGameOver()) {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

// Function to check if the game is over
function isGameOver() {
    // Check for a win
    for (let i = 0; i < winConditions.length; i++) {
        const [a, b, c] = winConditions[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            displayResultMessage(board[a] + ' wins!', 'winner-message');
            return true;
        }
    }

    // Check for a draw
    if (!board.includes('')) {
        displayResultMessage("It's a draw!", 'draw-message');
        return true;
    }

    return false;
}

// Function to display the result message
function displayResultMessage(message, messageClass) {
    const resultMessage = document.getElementById('result-message');
    resultMessage.textContent = message;
    resultMessage.classList.add(messageClass);
    resultMessage.style.display = 'block';
}

// Add event listeners to each cell
const cells = document.querySelectorAll('.cell');
cells.forEach((cell, index) => {
    cell.addEventListener('click', () => handleMove(cell, index));
});