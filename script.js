const container = document.querySelector(".container");
let jogadorAtual = "X";
let choice = "";
let tabuleiro = ["", "", "", "", "", "", "", "", ""];

const jogoDaVelha = {
  iniciar: () => {
    container.addEventListener("click", jogoDaVelha.celulaClicada);

    for (i = 1; i < 10; i++) {
      let box = document.createElement("div");
      box.innerHTML = "";
      box.className = "box";
      box.dataset.index = i;
      container.appendChild(box);
    }
  },
  celulaClicada: (e) => {
    e.target.textContent = jogadorAtual;
    jogadorAtual = jogadorAtual == "X" ? "O" : "X";
    console.log(e.target.attributes["data-index"].value);
  },
  verificarVencedor: () => {},
};

jogoDaVelha.iniciar();

const clearButton = document.getElementById("reset-button");
clearButton.addEventListener("click", () =>
  gameBoard.forEach((box) => {
    box.innerHTML = "";
  })
);

// const gameCel = document.createElement("div");
// gameCel.className = "box";

// function createGameBoard() {}

// let playerOne = 0;
// let playerTwo = 1;

// function verifyRow() {}

// const player = () => {
//   let points = 0;
// };
