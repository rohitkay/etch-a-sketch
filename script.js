const container1 = document.querySelector(".container");

function createGrid(width){
    for(j=1;j<=width;j++){
        for(i=1;i<=width;i++){
            const square = document.createElement("div");
            squareWidth = 700 / width;
            console.log(squareWidth);
            square.style.width = `${squareWidth}px`;
            console.log(square.style.width)
            square.style.border = "solid 0.01px #d9d9d9";
           
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
        square.addEventListener("mouseenter",()=>{
            square.style.backgroundColor = "grey";
        })   
    });
}

function removeGrid(){
    squares.forEach((square)=>{
        container1.removeChild(square);
    });
}

createGrid(16);

paint();
const removeButton = document.querySelector(".newGridButton");
removeButton.addEventListener("click",()=>{
    
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

