let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];
const winningCondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const cells = document.querySelectorAll("td");

const Winner = document.querySelector(".winner");

let winnerDeclared = false;

function handleClick(e) {
  let td = e.target;
  let index = td.getAttribute("index");
  if (td.innerHTML == "") {
    td.innerHTML = currentPlayer;
    gameState[index] = td.innerHTML;
    changeWinner();

    changePlayer();
  }
}

//changePlayer

function changePlayer() {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

//checkWinner

function changeWinner() {
  for (let i = 0; i < winningCondition.length - 1; i++) {
    let a = winningCondition[i][0];
    let b = winningCondition[i][1];
    let c = winningCondition[i][2];

    if (
      gameState[a] === currentPlayer &&
      gameState[b] === currentPlayer &&
      gameState[c] === currentPlayer
    ) {
      winnerDeclared = true;

      cells.forEach((td) => {
        td.innerHTML = "";
      });

      const winner = `Winner is ${currentPlayer}`;

      Winner.innerHTML = winner;
    }
  }
}



function init() {
  cells.forEach((cell) => {
    cell.addEventListener("click", handleClick);
  });
}

init();
