const cells = document.querySelectorAll('[data-cell]');
    const statusText = document.getElementById('status');
    let currentPlayer = 'X';
    let gameActive = true;

    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    function handleClick(e) {
        const cell = e.target;

        if (!gameActive || cell.textContent.trim() !== '') return;

        cell.textContent = currentPlayer;

        if (checkWin(currentPlayer)) {
            statusText.textContent = `${currentPlayer} wins! 🎉`;
            gameActive = false;
        } else if (isDraw()) {
            statusText.textContent = "It's a draw! 🤝";
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            statusText.textContent = `${currentPlayer}'s turn`;
        }
    }

    function checkWin(player) {
        const values = [...cells].map(cell => cell.textContent.trim());
        return winningCombinations.some(combination =>
            combination.every(index => values[index] === player)
        );
    }

    function isDraw() {
        return [...cells].every(cell => cell.textContent.trim() !== '');
    }

    cells.forEach(cell => cell.addEventListener('click', handleClick));
    statusText.textContent = `${currentPlayer}'s turn`;