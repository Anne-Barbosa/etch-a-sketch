const container = document.getElementById("container");

const rows = 16;
const cols = 16;

for (let i = 0; i < rows * cols; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener("mouseenter", () => {
        square.classList.add("rainbow");
    });

    container.appendChild(square);
}

