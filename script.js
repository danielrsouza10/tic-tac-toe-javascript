const gameBoard = document.querySelectorAll(".box");

gameBoard.forEach((box) => {
  box.addEventListener("click", () => (box.innerHTML = "x"));
});

const player = () => {
  let points = 0;
};
