const container = document.querySelector(".sketch-box");
const resetButton = document.querySelector(".reset");
const rainbowButton = document.querySelector(".rainbow");
const greyButton = document.querySelector(".grey");
//generates random number between min and max
let randomIntFromInterval = (min, max) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

rainbowButton.addEventListener('click', () => rainbowMode());
greyButton.addEventListener('click', () => greyMode());

resetButton.addEventListener('click', () => {
        let newGridSize = parseInt(prompt("Please enter a new grid size (max 100)!"));
        if (newGridSize > 100 ){
            alert("You must enter a number 100 or smaller, please try again");
        }
        else if (isNaN(newGridSize) ){
            clearGrid(64);
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
            e.target.style.backgroundColor = "black";
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

function greyMode(){
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {  
        box.style.backgroundColor = "rgba(0, 0, 0,0)";
    });
    let i=0;
    boxes.forEach((box) => {  
        box.addEventListener('mouseenter',(e) => {
            let currentGreyness = e.target.style.backgroundColor;
            console.log(this);
            e.target.style.backgroundColor = `rgba(0, 0, 0, 0.5)`;
        });
    });
}

function rainbowMode(){
    //random color array received from https://gist.github.com/mucar/3898821
    const colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
		  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {  
        box.style.backgroundColor = "rgba(0, 0, 0,0)";
    });
        boxes.forEach((box) => {  
        box.addEventListener('mouseenter',(e) => {
            let i = randomIntFromInterval(0,49);
            e.target.style.background = colorArray[i];
        });
    });
}



//default is 16x16 grid
loadGrid(64);