const container = document.querySelector('#gridContainer')

function createGrid(squares = 16) {
    for (let i = 0; i < squares; i++) {
        newRow = document.createElement('div')
        newRow.classList.add("row")
        for (let i = 0; i <squares; i++) {
            newCell = document.createElement('div')
            newCell.classList.add("cell")
            newRow.appendChild(newCell)
        }
        container.appendChild(newRow)
        newDiv = document.createElement('div')
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



