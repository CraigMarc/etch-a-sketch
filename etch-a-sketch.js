for (let i=0; i<256; i++) {

const container = document.querySelector('#container');
     const grid = document.createElement('div');
     grid.classList.add('grid');
    
     container.appendChild(grid);

}

const grid = document.querySelectorAll('.grid');

grid.forEach((grid) => {

     grid.addEventListener('mouseover', () => {

          grid.style.backgroundColor = 'red'; 
 
          
     })
})

const row = document.querySelectorAll('#rows');

row.forEach((row) => {

     row.addEventListener('click', () => {

          let rowNumber = row.value
 console.log(rowNumber)
          
     })
})