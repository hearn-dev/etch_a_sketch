// Function that construct the grid within the canvas.

const grid = (x) => {
    for (let cell=0;cell<x*x;cell++) {
        let block = document.createElement('div');
        block.className = 'cell';
        block.style.width = `${600/x}px`;
        block.style.height = `${600/x}px`;
        document.querySelector('#canvas').appendChild(block);
    }
}

grid(16);

// Add mouse over events to each cell to change color.
const cells = document.querySelectorAll(".cell");

for (let i=0; i<cells.length; i++) {
    cells[i].addEventListener("mouseenter", function(event) {
        event.target.style.backgroundColor = "black";
    })
}

// Function that clears canvas assigned to clear button

const freshCanvas = () => {
    
    cells.forEach(cell => {
        cell.style.backgroundColor = "white"
    })
}

const clear = document.getElementById('clear');
clear.addEventListener("click", () => freshCanvas());
