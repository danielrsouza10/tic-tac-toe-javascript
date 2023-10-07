const gameBoard = {
  lines: 3,
  columns: 3,
};

const container = document.querySelector(".container");

for (i = 0; i < 9; i++) {
  const box = document.createElement("div");
  box.innerHTML = "";
  box.className = "box";
  box.dataset.index = i;
  container.appendChild(box);
  box.addEventListener("click", (e) =>
    console.log(e.target.attributes["data-index"].value)
  );
}

function verificarVencedor() {}

const clearButton = document.getElementById("reset-button");
clearButton.addEventListener("click", () =>
  gameBoard.forEach((box) => {
    box.innerHTML = "";
  })
);

console.log(gameBoard.lines);

// const gameCel = document.createElement("div");
// gameCel.className = "box";

// function createGameBoard() {}

// let playerOne = 0;
// let playerTwo = 1;

container.forEach((box) => {
  box.addEventListener("click", () => {
    if (playerOne % 2 == 0) {
      box.innerHTML = "X";
      playerOne++;
      playerTwo++;
    } else {
      box.innerHTML = "O";
      playerOne++;
      playerTwo++;
    }
  });
});

// function verifyRow() {}

// const player = () => {
//   let points = 0;
// };
