//
//
const gridContainerSize = 550;
const gridContainer = document.querySelector(".grid-container");

let penColor = "";
let sheetColor = "";
let totalNumOfGrids = 1;
let currentNumOfGrids = 1;
const SLIDER_DEFAULT_VALUE = 20;
const PEN_DEFAULT_COLOR = "#000000";
const SHEET_DEFAULT_COLOR = "#ffffff";

const penClr = document.getElementById("pen");
const sheetClr = document.getElementById("sheet");
const slider = document.getElementById("grid-slider");
const eraseBtn = document.querySelector(".erase");
const clearBtn = document.querySelector(".clear");
const resetBtn = document.querySelector(".reset");
const span = document.querySelector("span");
const penClrPickerContainer = document.querySelector(".clr-picker-1");
const sheetClrPickerContainer = document.querySelector(".clr-picker-2");

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

let rainbowPen = false;
const rainbowBtn = document.querySelector(".rainbow");
rainbowBtn.addEventListener("click", () => (rainbowPen = true));

penColor = PEN_DEFAULT_COLOR;
sheetColor = SHEET_DEFAULT_COLOR;
penClr.addEventListener("input", (event) => {
  rainbowPen = false;
  penColor = event.target.value;
  penClrPickerContainer.style.backgroundColor = penColor;
});

sheetClr.addEventListener("input", (event) => {
  sheetColor = event.target.value;
  gridContainer.style.backgroundColor = sheetColor;
  sheetClrPickerContainer.style.backgroundColor = sheetColor;
});

eraseBtn.addEventListener("click", () => {
  rainbowPen = false;
  penColor = sheetColor;
});

slider.addEventListener("click", (event) => {
  if (gridContainer.firstChild) gridContainer.textContent = "";
  n = Math.floor(event.target.value);
  createGrid(n);
});

clearBtn.addEventListener("click", () => {
  gridContainer.textContent = "";
  n = currentNumOfGrids;
  createGrid(n);
});

resetBtn.addEventListener("click", () => {
  rainbowPen = false;
  penColor = PEN_DEFAULT_COLOR;
  gridContainer.textContent = "";
  sheetColor = SHEET_DEFAULT_COLOR;
  slider.value = SLIDER_DEFAULT_VALUE;
  gridContainer.style.backgroundColor = SHEET_DEFAULT_COLOR;
  penClrPickerContainer.style.backgroundColor = penColor;
  sheetClrPickerContainer.style.backgroundColor = sheetColor;
  createGrid(SLIDER_DEFAULT_VALUE);
});

function createGrid(n) {
  totalNumOfGrids = n * n;
  let gridWidth = 550 / n;
  let gridHeight = 550 / n;

  span.textContent = `Grid: ${n} x ${n} `;
  for (let i = 1; i <= totalNumOfGrids; i++) {
    const gridDiv = document.createElement("div");
    gridDiv.classList.add(`grid`);
    gridDiv.setAttribute("id", `gridNum${i}`);
    gridDiv.style.width = `${gridWidth}px`;
    gridDiv.style.height = `${gridHeight}px`;
    gridContainer.appendChild(gridDiv);

    const gridX = document.getElementById(`gridNum${i}`);
    gridX.addEventListener("mouseover", changeColor);
    gridX.addEventListener("mousedown", changeColor);
  }
  currentNumOfGrids = n;
}

function changeColor(e) {
  if (e.type === "mouseover" && !mouseDown) return;

  if (rainbowPen) {
    penColor = getRainbowColor();
    e.target.style.backgroundColor = penColor;
  }
  e.target.style.backgroundColor = penColor;
}

function getRainbowColor() {
  let rainbowColors = [
    "#e81416",
    "#ffa500",
    "#faeb36",
    "#79c314",
    "#487de7",
    "#4b369d",
    "#70369d",
  ];
  let rainbowColor = "";
  rainbowColor =
    rainbowColors[Math.floor(Math.random() * rainbowColors.length)];
  return rainbowColor;
}

window.onload = () => createGrid(SLIDER_DEFAULT_VALUE);
