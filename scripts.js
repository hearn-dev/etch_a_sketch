// Function that construct the grid within the canvas.
const canvas = document.querySelector("#canvas")



const grid = (x) => {

    canvas.style.gridTemplateColumns = `repeat(${x}, 1fr)`

    for (let cell=0;cell<x*x;cell++) {
        let block = document.createElement('div');
        block.className = 'cell';
        block.style.width = `${600/x}px`;
        block.style.height = `${600/x}px`;
        canvas.appendChild(block);
    }
    const cells = document.querySelectorAll(".cell");
    for (let i=0; i<cells.length; i++) {
        cells[i].addEventListener("mouseenter", function(event) {
            event.target.style.backgroundColor = "#33ff33";
    })
}
}

grid(16);

// Add mouse over events to each cell to change color.


// Function that clears canvas assigned to clear button, then builds new canvas according to size requested

const freshCanvas = () => {
    const cells = document.querySelectorAll(".cell");

    cells.forEach(cell => {
        cell.style.backgroundColor = "black"
    })

    let size = prompt("How many cells per side? (max 100)");

    // if (size%2!=0) {
    //     size++;
    // }

    cells.forEach(cell => {
        canvas.removeChild(cell);
    })

    grid(size);
    
}

const clear = document.getElementById('clear');
clear.addEventListener("click", () => freshCanvas());
