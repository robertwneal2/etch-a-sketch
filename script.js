function generateGrid(val = 25) {

    const container = document.querySelector('.container')
    const totHeight = container.offsetHeight
    const totWidth = container.offsetWidth
    let i = 0
    let gridX = val
    let gridTot = gridX * gridX 
    let boxWidth = totWidth/gridX
    let boxHeight = totHeight/gridX
    for (; i < gridTot; i++) { //create grid
        const box = document.createElement('div')
        box.classList.add('box')
        box.style.width = `${boxWidth}px`
        box.style.height = `${boxHeight}px`
        box.addEventListener('mouseover', () => {
            box.style.backgroundColor = "blue"
        })
        container.appendChild(box)
    }
}

function clearGrid() {
    boxes = document.querySelectorAll('.box')
    boxes.forEach(box => {
        box.remove();
    })
}

function updateGrid() {
    let input = prompt("Enter a grid width between 1 and 100:")
    if (input === null) {
        return
    }
    input = parseInt(input)
    if (isNaN(input) === true || input > 100 || input <1) {
        alert("Must enter a number between 1 and 100")
    } else {
        clearGrid()
        generateGrid(input)
    }
}

updateButton = document.querySelector(".button")
updateButton.addEventListener('click', updateGrid)
generateGrid()