const container = document.querySelector(".container");
let jogadorAtual = "X";
let choice = "";
let tabuleiro = ["", "", "", "", "", "", "", "", ""];

const jogoDaVelha = {
  iniciar: () => {
    container.addEventListener("click", jogoDaVelha.celulaClicada);

    for (i = 0; i < 9; i++) {
      let box = document.createElement("div");
      box.innerHTML = "";
      box.className = "box";
      box.dataset.index = i;
      container.appendChild(box);
    }
  },
  celulaClicada: (e) => {
    //index recebe o index da
    let index = e.target.attributes["data-index"].value;

    //tabuleiro recebe na posição do index a escolha do jogador atual
    tabuleiro[index] = jogadorAtual;

    //celula recebe a marcaçao do jogador atual
    e.target.textContent = jogadorAtual;

    // verifica e altera o jogador
    jogadorAtual = jogadorAtual == "X" ? "O" : "X";

    jogoDaVelha.verificarVencedor();

    console.log(index);
    console.log(tabuleiro);
  },
  verificarVencedor: () => {
    if (
      tabuleiro[([0], [1], [2])] == "X" ||
      tabuleiro[([0], [1], [2])] == "O"
    ) {
      console.log("vencedor");
    } else if (
      tabuleiro[([3], [4], [5])] == "X" ||
      tabuleiro[([3], [4], [5])] == "O"
    ) {
      console.log("vencedor");
    } else if (
      tabuleiro[([6], [7], [8])] == "X" ||
      tabuleiro[([6], [7], [8])] == "O"
    ) {
      console.log("vencedor");
    } else if (
      tabuleiro[([0], [3], [6])] == "X" ||
      tabuleiro[([0], [3], [6])] == "O"
    ) {
      console.log("vencedor");
    } else if (
      tabuleiro[([1], [4], [7])] == "X" ||
      tabuleiro[([1], [4], [7])] == "O"
    ) {
      console.log("vencedor");
    } else if (
      tabuleiro[([2], [5], [8])] == "X" ||
      tabuleiro[([2], [5], [8])] == "O"
    ) {
      console.log("vencedor");
    } else if (
      tabuleiro[([0], [4], [8])] == "X" ||
      tabuleiro[([0], [4], [8])] == "O"
    ) {
      console.log("vencedor");
    } else if (
      tabuleiro[([2], [4], [6])] == "X" ||
      tabuleiro[([2], [4], [6])] == "O"
    ) {
      console.log("vencedor");
    } else {
      console.log("empate");
    }

    // if(tabuleiro)
    // const linhasVitoriosas = [
    //   [0, 1, 2],
    //   [3, 4, 5],
    //   [6, 7, 8], //linhas horizontais
    //   [0, 3, 6],
    //   [1, 4, 7],
    //   [2, 5, 8], //linhas verticais
    //   [0, 4, 8],
    //   [2, 4, 6], //linhas diagonais
    // ];
    // for (const linha of linhasVitoriosas) {
    //   const [a, b, c] = linha;
    //   if (
    //     this.tabuleiro[a] &&
    //     this.tabuleiro[a] === this.tabuleiro[b] &&
    //     this.tabuleiro[a] === this.tabuleiro[c]
    //   ) {
    //     return true;
    //   }
    // }
  },
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
