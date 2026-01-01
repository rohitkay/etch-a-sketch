const container1 = document.querySelector(".container");

function createGrid(width){
    for(j=1;j<=width;j++){
        for(i=1;i<=width;i++){
            const square = document.createElement("div");
            squareWidth = 700 / width;
            console.log(squareWidth);
            square.style.width = `${squareWidth}px`;
            console.log(square.style.width)
            square.style.border = "solid 0.01px grey";
            square.style.backgroundColor = "yellow"
            square.style.height = `${squareWidth}px`;
            container1.appendChild(square);
            square.style.padding = "0px"
            square.style.margin = "0px"
            
        }
        
    }
}

createGrid(140);