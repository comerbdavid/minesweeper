/*----- constants -----*/



/*----- app's state (variables) -----*/

let alreadyClicked;
let mines;

/*----- cached element references -----*/

const cells = 

/*----- event listeners -----*/

document.getElementById('board').addEventListener('click', handleClick);
document.getElementById('reset').addEventListener('click', init);

/*----- functions -----*/
//-------------------------------------------------------------main functions here
//only allows certain clicks (X)
//updates state              ( )
//renders board              (X)
 
init();

function handleClick (evt) {
    //only allow certain clicks
    if (alreadyClicked.includes(parseInt(evt.target.id)) || 
        evt.target.id === 'board' ) return;
    console.log(evt.target.id);

    //updates state
    alreadyClicked.push(parseInt(evt.target.id));
    
    renderBoard();
}

//---------------------------------------------------------secondary functions here
//any function that plugs directly into the clickHandler (as few as possible)

function init () {
    resetState();
    plantMines();
}

function renderBoard () {
    
}
//---------------------------------------------------------------tertiary functions
//dem little guys

function resetState() {
    alreadyClicked = [];
    mines = [];
}

function plantMines () {
    for (i =1; i < 9; i++) {
        mines.push(getRandomInt(1, 100));
    }
    console.log(mines);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


