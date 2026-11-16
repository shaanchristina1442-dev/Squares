let squareArea = document.querySelector("#squarearea");
let squareCount = parseInt(Math.random() *21) + 30; // Random number of squares between 30 and 50

for (let i = 0; i < squareCount; i++){
    let square = document.createElement("div");
    square.style.backgroundColor = getRandomColor();
    square.style.top = parseInt(Math.random() * (300 - 50)) + "px";
    square.style.left = parseInt(Math.random() * (700 - 50)) + "px";
    square.className = "square";
    squareArea.append(square);
};

function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        let position = parseInt(Math.random() * letters.length);
        color = letters.charAt(position);
    };
    return color;
};




