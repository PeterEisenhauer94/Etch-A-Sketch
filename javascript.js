//generate 16x16 grid
let grid_container = document.querySelector('#grid-container');

function generateGrid(){
    for (let i=1; i<=16;i++){
        let d = document.createElement('div');
        d.className = 'row';
        d.setAttribute('id', i);
        grid_container.appendChild(d);
        for (let k=1;k<=16;k++){
            let div = document.createElement('div');
            div.setAttribute('id', k);
            div.className = 'tile';
            d.appendChild(div);
        }
    }
    
}

function reset(){
    document.querySelectorAll('.tile').forEach(function(item){
        item.removeAttribute("style","background-color");
    })
}


generateGrid();

//make all tiles change color on hover
document.querySelectorAll('.tile').forEach(function(item){
    item.addEventListener('mouseover', function(){
        item.setAttribute('style','background-color: green');
    })
})
