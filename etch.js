let bigContain = document.querySelector('#main')
let container = document.querySelector('#grid');
let numColumns = 16;
let numRows = 16;

//adds a button for grid dimension selection 
let btn1 = document.createElement('button'); 
btn1.textContent = "Size"
bigContain.appendChild(btn1);

//adds a button to clear grid 
let btn2 = document.createElement('button');
btn2.textContent = "Clear";
bigContain.appendChild(btn2);

//When button is clicked, new grid formed 
btn1.addEventListener('click', () => {  
    removed = bigContain.removeChild(container);
    container = document.createElement("div");
    bigContain.appendChild(container);
    container.setAttribute('id', 'grid');
    let sides = Number(prompt("Enter a number between 16 - 100", 16));
    dimensOfGrid(sides); 
    createGrid()
    etchFunc();
})

btn2.addEventListener('click', () => { //clear grid after 'clear' button is clicked 
    let unitG = document.querySelectorAll('.unitGrid');
    let unitGArr = Array.from(unitG);
    unitGArr.forEach(grid => {
            grid.style.backgroundColor = 'transparent'
    })
})

//checks if input number of grids is valid
function dimensOfGrid(num) { 
    if (num < 16 || num > 100 || Number.isNaN(num)) {
        alert("Number is invalid, a default of 16x16 grid is created!");
        numColumns = 16;
        numRows = 16;
    }else {
        numColumns = num;
        numRows = num;
    }
}

//checks if mouse is down
let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)


//creates blank grid
function createGrid() {
    for (row = 0; row < numRows; row++)  { //creates rows
        let smlContainer = document.createElement("div");
        if (row === 0) {
            smlContainer.style.borderTop= "1px solid black";
        }
        smlContainer.style.display = 'flex';
        smlContainer.style.height = `${1/numColumns*100}%`
        smlContainer.style.width = '100%';
        smlContainer.classList.add('rows')
        container.appendChild(smlContainer);

        for (col = 0; col < numColumns; col++) { //creates grid
            let cols = document.createElement("div");
            if (col === 0) {
                cols.setAttribute('style', 'border-left: 1px solid black; border-bottom: 1px solid black; border-right: 1px solid black');
            } else {
            cols.setAttribute('style', 'border-bottom: 1px solid black; border-right: 1px solid black');
            }
            cols.style.height = '100%';
            cols.style.width = '100%';
            cols.classList.add('unitGrid');
            smlContainer.appendChild(cols);
        }
    }
}

//adds the coloring in for grid
function etchFunc() {
    let unitG = document.querySelectorAll('.unitGrid');
    let unitGArr = Array.from(unitG); //change nodeList to array
    unitGArr.forEach(grid => {
        grid.addEventListener('mouseover', (e) => { //turns black when hovered and clicked
            if (mouseDown) { 
            grid.style.backgroundColor = 'black'
            } 
        });
    })
}

//creates initial grid when page loads
createGrid()
etchFunc()