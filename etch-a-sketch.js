
function createGrid (screenSize) {

for (let i=0; i<screenSize; i++) {

const container = document.querySelector('#container');
     const grid = document.createElement('div');
     grid.classList.add('grid');
    
     container.appendChild(grid);

}
}
/*set up initial screensize*/

createGrid(256)

/*select scrensize*/
/*
let rowNumber = 256
const row = document.querySelectorAll('#rows');

row.forEach((row) => {

     row.addEventListener('click', () => {

rowNumber = row.value * row.value
 
createGrid(rowNumber)
          
     })
})
console.log(rowNumber)*/

/*draw with mouseover*/

const grid = document.querySelectorAll('.grid');

grid.forEach((grid) => {

     grid.addEventListener('mouseover', () => {

          grid.style.backgroundColor = 'red'; 
 
          
     })
})


