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
 const container = document.querySelector('.container');
 const reset = document.querySelector('.reset');
 let cells = [];





// initial conditions creates the style for the 16x16 grid

container.style.gridTemplateColumns = 'repeat(16, auto)';
container.style.gridTemplateRows = 'repeat(16, auto)';


//function to create the grid (includes an event listener in the function)
createCells(16);

function createCells(size) {
	for(let i = 0; i < size; i++){
		for(let j = 0; j < size; j++){
			let cell = document.createElement('div');
			cell.classList.add('cell');
			container.appendChild(cell);
		}
	}//create the grid
	cells = Array.from(document.querySelectorAll('.cell'));
	cells.forEach(cell => cell.addEventListener('mouseenter', fill)); //event listener
}

//function that allows for reset of the grid
function deleteCells() {
	cells.forEach(cell => container.removeChild(cell));
	cells = [];
}


//function that is used in the event listener
function fill(e) {
	e.target.style.backgroundColor = 'black';
}


reset.addEventListener('click', clearBoard); //reset button event listner


//reset button function
function clearBoard(){
	deleteCells();
	container.style.gridTemplateColumns = 'repeat(16, auto)';
    container.style.gridTemplateRows = 'repeat(16, auto)';
	createCells(16);
}


