let container = document.querySelector('#grid');
let numColumns = 16;
let numRows = 16;

let btn1= document.createElement('button'); //adds a button for grid dimension selection 
container.appendChild(btn1);

let sides = Number(prompt("Enter a number between 16 - 100", 16));


function dimensOfGrid(num) { //checks if input number of grids is valid
    if (num < 16 || num > 100 || Number.isNaN(num)) {
        alert("Number is invalid, a default of 16x16 grid is created!");
        numColumns = 16;
        numRows = 16;
    }else {
        numColumns = num;
        numRows = num;
    }
}

dimensOfGrid(sides)

for (row = 0; row < numRows; row++)  { //creates rows
    let smlContainer = document.createElement("div");
    if (row === 0) {
        smlContainer.style.borderTop= "1px solid black";
    }
    smlContainer.style.display = 'flex';
    smlContainer.style.height = `${1/numColumns*100}%`
    smlContainer.style.width = '100%';
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

let unitG = document.querySelectorAll('.unitGrid');
let unitGArr = Array.from(unitG); //change nodeList to array
unitGArr.forEach(grid => {
    grid.addEventListener('mouseenter', (e) => { //turns black when hovered 
       grid.style.backgroundColor = 'black' 
    })
});