const container = document.querySelector(".wrapper");

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

loadGrid(90);