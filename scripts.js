const container = document.querySelector(".wrapper");
const resetButton = document.querySelector(".reset");
resetButton.addEventListener('click',() => {
    clearGrid();
});

function loadGrid(size){
    container.style.cssText = `grid-template-columns: repeat(${size}, 1fr);`
    let gridTotal = size*size;
    for (let i=0; i < gridTotal; i++){
        const grid = document.createElement("div");
        grid.classList.add("box");
        // grid.style.cssText = `flex-basis: ${flexPercentage}%`;    
        container.appendChild(grid);
    }

    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {  
    box.addEventListener('mouseenter',(e) => {
        e.target.style.background = "black";
    });
});
}

function clearGrid(){
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {  
        box.remove();
    });
}

//default is 16x16 grid
loadGrid(16);