const container = document.getElementById("container");
const totalSize = 960;

// CREATE GRID

function createGrid(size) {
    container.innerHTML = "";

    const squareSize = totalSize / size;

    for (let i = 0; i < size*size; i++) {
        const square = document.createElement("div");

        square.classList.add("square");

        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        square.addEventListener ("mouseenter", () => {
            square.classList.add("rainbow");
        });
        container.appendChild(square);
    }
}

// FIRST GRID

createGrid(16);

// BUTTON
const button = document.createElement("button");
button.textContent = "New Grid";

document.body.appendChild(button);

// RESIZE

button.addEventListener("click", () => {
    let size = Number(prompt("Enter the number of squares per size (max 100): "));

    if (size < 1 || size > 100 || Number.isNaN(size)) {
        alert("Please enter a number between 1 and 100");
        return;
    }
    createGrid(size);
})

