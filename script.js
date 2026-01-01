const container1 = document.querySelector(".container");

function createGrid(width){
    for(j=1;j<=width;j++){
        for(i=1;i<=width;i++){
            const square = document.createElement("div");
            squareWidth = 700 / width;
            console.log(squareWidth);
            square.style.width = `${squareWidth}px`;
            console.log(square.style.width)
            square.style.border = "solid 0.01px #e9e9e9";
           
            square.style.height = `${squareWidth}px`;
            container1.appendChild(square);
            square.style.padding = "0px"
            square.style.margin = "0px"
            square.setAttribute("class","square")
        }
        
    }
    squares = document.querySelectorAll(".square");
}

function paint(){
    
    squares.forEach((square) => {
        let entry = 0.1;
        square.addEventListener("mouseenter",()=>{
            let randomCol= randomColor();
            entry += 0.1;
            square.style.backgroundColor = `${randomCol}`;
            square.style.opacity = `${entry}`;
            console.log(randomCol);
        })   
    });
}

function removeGrid(){
    squares.forEach((square)=>{
        container1.removeChild(square);
    });
}

function clearGrid(){
    squares.forEach((square)=>{
        square.style.backgroundColor = "white";
        square.style.border ="solid 0.01px #e9e9e9";
    });
}

function randomColor(){
    var letters = '0123456789ABCDEF';
    var color = "#";
    for (var i =0; i<6;i++){
        color += letters[Math.floor(Math.random()*16)];
    }
    return color;
}

createGrid(16);

paint();
const newGridButton = document.querySelector(".newGridButton");
newGridButton.addEventListener("click",()=>{
    
    let option = prompt("Please enter how many squares wide")
    if (option != null){
        if (option > 100){
            alert("Needs to be less than 100");
        }
        else{
            removeGrid();
            createGrid(option);
            
        }
    }
    paint();
});

const clearButton = document.querySelector(".clearButton");
clearButton.addEventListener("click",()=>{
    clearGrid();
});
