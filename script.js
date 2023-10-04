//
//

const gridContainerSize = 550;
const gridContainer = document.querySelector(".grid-container");

let totalNumOfGrids = 1;
let gridInputValue = 1;
let penColor = "";
let sheetColor = "";
const SLIDER_DEFAULT_VALUE = 10;
const PEN_DEFAULT_COLOR = "#000000";
const SHEET_DEFAULT_COLOR = "#ffffff";
penColor = PEN_DEFAULT_COLOR;
sheetColor = SHEET_DEFAULT_COLOR;

const penClr = document.getElementById("pen");
const sheetClr = document.getElementById("sheet");
const slider = document.getElementById("grid-slider");
const eraseBtn = document.querySelector(".erase");
const clearBtn = document.querySelector(".clear");
const resetBtn = document.querySelector(".reset");
const penClrPickerContainer = document.querySelector(".clr-picker-1");
const sheetClrPickerContainer = document.querySelector(".clr-picker-2");

resetBtn.addEventListener("click", () => {
  gridContainer.textContent = "";
  n = SLIDER_DEFAULT_VALUE;
  penColor = PEN_DEFAULT_COLOR;
  sheetColor = SHEET_DEFAULT_COLOR;
  gridContainer.style.backgroundColor = SHEET_DEFAULT_COLOR;
  penClrPickerContainer.style.backgroundColor = penColor;
  sheetClrPickerContainer.style.backgroundColor = sheetColor;
  createGrid(n);
});

eraseBtn.addEventListener("click", () => (penColor = sheetColor));
penClr.addEventListener("input", (event) => {
  penColor = event.target.value;
  penClrPickerContainer.style.backgroundColor = penColor;
});

sheetClr.addEventListener("input", (event) => {
  sheetColor = event.target.value;
  gridContainer.style.backgroundColor = sheetColor;
  sheetClrPickerContainer.style.backgroundColor = sheetColor;
});

slider.addEventListener("click", (event) => {
  if (gridContainer.firstChild) gridContainer.textContent = "";
  gridInputValue = Math.floor(event.target.value);
  n = gridInputValue;
  createGrid(n);
});

clearBtn.addEventListener("click", () => {
  gridContainer.textContent = "";
  penColor = SHEET_DEFAULT_COLOR;
  n = SLIDER_DEFAULT_VALUE;
  createGrid(n);
});

// create grids (squares) and add event listeners to each grid
function createGrid(n) {
  totalNumOfGrids = n * n;
  let gridWidth = 550 / n;
  let gridHeight = 550 / n;

  for (let i = 1; i <= totalNumOfGrids; i++) {
    const gridDiv = document.createElement("div");
    gridDiv.classList.add(`grid`);
    gridDiv.setAttribute("id", `gridNum${i}`);
    gridDiv.style.width = `${gridWidth}px`;
    gridDiv.style.height = `${gridHeight}px`;
    gridContainer.appendChild(gridDiv);

    // adding event listener to each grid
    const gridX = document.getElementById(`gridNum${i}`);
    gridX.addEventListener("click", function () {
      gridX.style.backgroundColor = `${penColor}`;
    });
  }
}

createGrid(SLIDER_DEFAULT_VALUE);
