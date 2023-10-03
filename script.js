// ui
// targeting grid-container div

const gridContainerSize = 550;

let numOfGrids = 1;

const gridContainer = document.querySelector(".grid-container");

function createGrid(n) {
  numOfGrids = n * n;
  let gridWidth = 550 / n;
  let gridHeight = 550 / n;
  for (let i = 1; i <= numOfGrids; i++) {
    const gridDiv = document.createElement("div");
    gridDiv.classList.add(`grid`);
    gridDiv.setAttribute("id", `gridNum${i}`);
    gridDiv.style.width = `${gridWidth}px`;
    gridDiv.style.height = `${gridHeight}px`;
    gridDiv.textContent = i;

    // adding width and height
    gridContainer.appendChild(gridDiv);
  }
}

createGrid(4);
