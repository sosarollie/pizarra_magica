function populateGrid(size){
    const gridContainer = document.querySelector("#gridContainer");
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach((div) => div.remove());
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    const amount = size * size;
        for (let i = 0; i < amount; i++){
            const div = document.createElement("div");
            let click = false;
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
    this.style.backgroundColor = "black";
}