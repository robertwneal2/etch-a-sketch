const container = document.querySelector('.container')
const totHeight = container.offsetHeight
const totWidth = container.offsetWidth
let i = 0
let gridX = 4
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

