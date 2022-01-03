const container = document.querySelector(".wrapper");
const resetButton = document.querySelector(".reset");

resetButton.addEventListener('click', () => {
        let newGridSize = parseInt(prompt("Please enter a new grid size (max 100)!"));
        if (newGridSize > 100 || isNaN(newGridSize) ){
            alert("You must enter a number 100 or smaller, please try again");
        }
        else {
            clearGrid(newGridSize);
        }
});

function loadGrid(size){
    container.style.cssText = `grid-template-columns: repeat(${size}, 1fr);`
    let gridTotal = size*size;
    for (let i=0; i < gridTotal; i++){
        const grid = document.createElement("div");
        grid.classList.add("box"); 
        container.appendChild(grid);
    }

    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {  
        box.addEventListener('mouseenter',(e) => {
            e.target.style.background = "black";
        });
    });
}

function clearGrid(size){
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {  
        box.remove();
    });
    loadGrid(size);
}

//default is 16x16 grid
loadGrid(16);