//generate grid
let grid_container = document.querySelector('#grid-container');
//initial grid size
let gridSize = 16;

function generateGrid(gridSize){
    for (let i=1; i<=gridSize;i++){
        let d = document.createElement('div');
        d.className = 'row';
        d.setAttribute('id', i);
        grid_container.appendChild(d);
        for (let k=1;k<=gridSize;k++){
            let div = document.createElement('div');
            div.setAttribute('id', k);
            div.className = 'tile';
            d.appendChild(div);
        }
    }
    changeOnHover()
}

function reset(){
    document.querySelectorAll('.tile').forEach(function(item){
        item.removeAttribute("style","background-color");
    })
}

function chooseSize(){
    let input = prompt("Enter a number to generate a square (2 -> 2x2, 3->3x3, etc");
    gridSize = parseInt(input);
    destroyGrid();
    generateGrid(gridSize);
}

function changeOnHover(){
    document.querySelectorAll('.tile').forEach(function(item){
        item.addEventListener('mouseover', function(){
            item.setAttribute('style','background-color: green');
        })
    })
}

function destroyGrid(){
    grid_container.replaceChildren();
}

//Generates initial grid
generateGrid(gridSize);

//make all tiles change color on hover


