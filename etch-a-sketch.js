
function createGrid (screenSize) {


for (let i=0; i<screenSize*screenSize; i++) {
     const container = document.querySelector('#container');
     const grid = document.createElement('div');

     grid.classList.add('grid');
     
     container.appendChild(grid);
     grid.style.width = 450/screenSize + 'px'; 
     grid.style.height = 450/screenSize + 'px';

}
}


/*set up initial screensize*/

createGrid(16)
draw()
/*select scrensize*/

let rowNumber = 256
const row = document.querySelectorAll('#rows');

row.forEach((row) => {
     row.addEventListener('click', () => {
          const boxes = document.querySelectorAll('.grid');

          boxes.forEach(box => {
            box.remove();
          });
rowNumber = row.value 

createGrid(rowNumber)
console.log(rowNumber)  
draw()   
     })
})


/*draw with mouseover*/
function draw () {
const grid = document.querySelectorAll('.grid');

grid.forEach((grid) => {

     grid.addEventListener('mouseover', () => {

          grid.style.backgroundColor = 'black'; 
 
          
     })
})
}

