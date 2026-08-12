const container = document.getElementById("container");
const button = document.getElementById("new-grid");
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
            function getRandomInt (min,max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }

            const r = getRandomInt(0, 255);
            const g = getRandomInt(0, 255);
            const b = getRandomInt(0, 255);

            const rgbColor = `rgb(${r}, ${g}, ${b})`;
            square.style.backgroundColor = rgbColor;

            const  maxCount = 10;

            let count = parseInt(square.dataset.count, 10) || 0;

            count = Math.min(count + 1, maxCount);

            square.dataset.count = count;

            const newOpacity = count / maxCount;
            
            square.style.opacity = newOpacity;
        });
        container.appendChild(square);
    }
}

// FIRST GRID

createGrid(16);

// RESIZE

button.addEventListener("click", () => {
    let size = Number(prompt("Enter the number of squares per size (max 100): "));

    if (!Number.isInteger(size) || size < 1 || size > 100 || Number.isNaN(size)) {
        alert("Please enter a whole number between 1 and 100");
        return;
    }
    createGrid(size);
})

