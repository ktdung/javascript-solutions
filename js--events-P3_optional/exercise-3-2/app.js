// Exercise 2.2 - the Custom Grid
// ------------

const board = document.getElementById("board");
const rowsInput = document.getElementById("rows-input");
const columnsInput = document.getElementById("columns-input");

const BOARD_SIZE = 600;
let ROWS, COLUMNS;

board.style.height = board.style.width = `${BOARD_SIZE}px`;

renderBoard = () => {
  if (ROWS > 0 && COLUMNS > 0) {
    // *Need to remove the cells from the previous rendering...
    board.innerHTML = "";

    board.style.gridTemplateRows = `repeat(${ROWS}, 1fr)`;
    board.style.gridTemplateColumns = `repeat(${COLUMNS}, 1fr)`;

    for (let cellNum = 0; cellNum < ROWS * COLUMNS; cellNum++) {
      const cell = document.createElement("div");
      cell.id = `cell-${cellNum}`;
      cell.classList.add("cell");
      board.appendChild(cell);
    }
  }
};

handleRows = (e) => {
  ROWS = e.target.value;
  renderBoard();
};

handleColumns = (e) => {
  COLUMNS = e.target.value;
  renderBoard();
};

rowsInput.addEventListener("blur", handleRows);
columnsInput.addEventListener("blur", handleColumns);
