let squareArea = document.querySelector("#squarearea");
let squareCount = parseInt(math.random() *21) + 30; // Random number of squares between 30 and 50

for (let i = 0; i < squareCount; i++){
    let square = document.createElement("div");
    square.className = "square";
    squareArea.append(square);
};