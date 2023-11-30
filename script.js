// etch-a-sketch
// Name: Jonathan Kim

let gridContainer = document.querySelector(".gridContainer");
let squaresPerSide = 16;
let startDrawing = false;
let drawColor = "black";
let cells = [];

createGrid(squaresPerSide);
draw();


document.getElementById("sizeModifier").addEventListener("click", changeSize);
document.getElementById("clearer").addEventListener("click", clearGrid);
gridContainer.addEventListener("click", draw);


function createGrid(squares) {
    let totalCells = squares * squares;
    let cellSize = (600 / squares);
    for (let i = 0; i < totalCells; i++) {
        cells[i] = document.createElement("div");
        cells[i].classList.add("cell");
        cells[i].style.flex = `0 0 ${cellSize}px`;
        cells[i].style.height = `${cellSize}px`;
        cells[i].style.width = `${cellSize}px`;
        gridContainer.appendChild(cells[i]);
    }
}

function draw() {
    let squares = document.querySelectorAll(".cell");
    squares.forEach(square => {
        square.addEventListener('click', toggleDrawing);
        square.addEventListener('mouseover', placeColor);
    })
}

function toggleDrawing() {
    startDrawing = !startDrawing;
}

function placeColor(e) {
    if (startDrawing) {
        e.target.style.backgroundColor = drawColor;
    }
}

function changeSize(e) {
    let input = prompt("Please enter the desired number of rows and columns:", " ");
    let integerInput = parseInt(input);
    if (!isNaN(integerInput) && Number.isInteger(integerInput) && 0 < input && input <= 100) {
        removeGrid();
        createGrid(input);
    }
    else {
        alert("Please select an integer size between 1 and 100.");
    }
}

function removeGrid(e) {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

function clearGrid(e) {
    cells.forEach(cell => {
        cell.style.backgroundColor = "white";
    })
}

