// etch-a-sketch
// Name: Jonathan Kim

let gridContainer = document.querySelector(".gridContainer");
let squaresPerSide = 16;

createGrid(squaresPerSide);

function createGrid(squares) {
    for (let i = 0; i < squares; i++) {
        let row = document.createElement("div");
        row.classList.add('row');
        gridContainer.appendChild(row);
        for (let j = 0; j < squares; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            row.appendChild(cell);
        }
    }
}