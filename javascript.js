const container = document.querySelector('#gridContainer')

function createGrid(size = 16) {
    for (let i = 0; i < (size*size); i++) {
        newDiv = document.createElement('div')
        newDiv.classList.add('cell')
        newDiv.style.width = `${800/size}px`
        newDiv.style.height = `${800/size}px`
        container.appendChild(newDiv)
    }
}

createGrid()

container.addEventListener('mouseover', (event) => {
    element = event.target
    element.style.backgroundColor = 'black'
})


function getSize() {
    input = 101
    while (input > 100) {
        input = prompt("How many squares per side? (1-100) ")
    }
    return input;
}
const gridSizeButton = document.querySelector('button')
gridSizeButton.addEventListener('click', () => {
    size = getSize();
    while (container.firstChild) {
        container.lastChild.remove()
    }
    createGrid(size)
})



