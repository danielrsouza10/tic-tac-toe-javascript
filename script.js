const gameBoard = document.querySelectorAll(".box");

let playerOne = 0;
let playerTwo = 1;

gameBoard.forEach((box) => {
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

const player = () => {
  let points = 0;
};
