const container1 = document.querySelector(".container");

function createGrid(width){
    for(i=1;i<=width;i++){
        let square = document.createElement("div");
        squareWidth = 800 / width;
        console.log(squareWidth);
        square.style.width = `${squareWidth}px`;
        square.style.border = "solid 2px black";
        square.style.cssText = "background-color:yellow; height:20px;"
        container1.appendChild(square);
    }
}

createGrid(16);