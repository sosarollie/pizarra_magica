let color = 'black';

function selectedColor(input) {
    color = input;
    console.log(input);
}

function populateGrid(size){
    const gridContainer = document.querySelector("#gridContainer");
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach((div) => div.remove());
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    const amount = size * size;
        for (let i = 0; i < amount; i++){
            const div = document.createElement("div");
            div.addEventListener('mouseover', painting);
            div.classList.add('pixel');
            gridContainer.insertAdjacentElement('beforeend', div);
        }        
}

populateGrid(16);

function changeSize(input){
    if (input < 0 || input > 70 ){
        return console.log('enter a number between 1 and 100');
    } else  populateGrid(input);
}

function painting(){
    if (color === 'random') {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else{
        this.style.backgroundColor = color;
    };
};

function clear() {
    let gridContainer = document.querySelector("#gridContainer");
    let pixels = gridContainer.querySelectorAll('.pixel');
    pixels.forEach((div) => div.style.backgroundColor = 'white');
};   