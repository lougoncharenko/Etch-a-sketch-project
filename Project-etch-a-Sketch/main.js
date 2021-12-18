//etch a sketch algorith

//select the container div
//create a webpage of 16x16 grid of square divs
//use css grid or flexbox to make them a square
//set up a hover effect so that the grid div change color when you hover over them.
//set up an event listener for the div container ; make it change color when you hover
////change the div's background using Javascript: element.style.background
//add a button on the top scrren to clear the grid

/*variables:
 const container= select('container') */
 const container = document.getElementById("container");

/*create a div element
const div= create an Element for a div
set an attribute for the div ('id, divname')- for css
append the div element to the parent:container 
--------figure out how to add a 16x16 grid of divs------*/


function createGrid(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    
    container.appendChild(cell).className = "grid-item";
  };
};

createGrid(16, 16);

/*event listener for hovering
select div and add an event listener('mousehover', run changeColor function)
*/

/*function to change the div background from white to black
function changeColor
change div color from black to white
*/


/*create button variable
const button= select('clearbtn')
*/


/*addListener event to button 
button.addEventListener('click', clearGrid)*/


/*create a clear the grid function 
create function clearGrid
resets all the grids back to black
prompts the player to choose the grid size.*/