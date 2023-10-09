const container = document.querySelector(".container");
const resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", () => {
  container.innerHTML = "";
  jogoDaVelha.iniciar();
});

let jogadorAtual = "X";
let tabuleiro = ["", "", "", "", "", "", "", "", ""];

const jogoDaVelha = {
  iniciar: () => {
    tabuleiro = ["", "", "", "", "", "", "", "", ""];
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

    //verifica tabuleiro
    if ((tabuleiro[index] === "") & !jogoDaVelha.verificarVencedor()) {
      //tabuleiro recebe na posição do index a escolha do jogador atual
      tabuleiro[index] = jogadorAtual;
      //celula recebe a marcaçao do jogador atual
      e.target.textContent = jogadorAtual;
      jogadorAtual = jogadorAtual == "X" ? "O" : "X";
    } else {
      container.removeEventListener("click", jogoDaVelha.celulaClicada);
      let vencedor = document.createElement("div");
      vencedor.textContent = "O jogador " + jogadorAtual + " venceu a partida";
      container.appendChild(vencedor);
    }

    // verifica e altera o jogador

    // console.log(index);
    // console.log(tabuleiro);
  },
  verificarVencedor: () => {
    //Este array contém todas as combinações possíveis de células no tabuleiro que podem resultar em uma vitória. Cada elemento do array linhasVitoriosas é, por sua vez, um array que representa uma combinação vitoriosa.
    const linhasVitoriosas = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // Linhas horizontais
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // Linhas verticais
      [0, 4, 8],
      [2, 4, 6], // Linhas diagonais
    ];

    for (const linha of linhasVitoriosas) {
      //desestrutura o array atual em linha em três variáveis individuais a, b e c. Essas variáveis representam as posições das células no tabuleiro que estão sendo verificadas para determinar se há uma vitória.
      const [a, b, c] = linha;
      //verifica se as células nas posições a, b e c do tabuleiro contêm o mesmo valor (ou seja, se todas são 'X' ou todas são 'O').
      if (
        tabuleiro[a] &&
        tabuleiro[a] === tabuleiro[b] &&
        tabuleiro[a] === tabuleiro[c]
      ) {
        return true;
      }
    }
    return false;
  },
};

jogoDaVelha.iniciar();

// const gameCel = document.createElement("div");
// gameCel.className = "box";

// function createGameBoard() {}

// let playerOne = 0;
// let playerTwo = 1;

// function verifyRow() {}

// const player = () => {
//   let points = 0;
// };
