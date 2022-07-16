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
        box.addEventListener('mouseover', changeBoxColor)
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

function changeBoxColor(e) {
    let rgbArr = []
    let i = 0
    let currentRgb = this.style.backgroundColor
    if (!currentRgb) { //if color blank, set to new one
        for (; i < 3; i++) {
            rgbArr[i] = Math.floor((Math.random() * Math.floor(256)))
        }
    } else {
        rgbArr = darkenRgb(currentRgb)
    }
    this.style.backgroundColor = `rgb(${rgbArr[0]}, ${rgbArr[1]}, ${rgbArr[2]})`
}

function darkenRgb(rgb) {
    let rgbArr = rgb.slice(
        rgb.indexOf("(") + 1, 
        rgb.indexOf(")")
    ).split(", ");
    let darkRbgArr = rgbArr.map(color => {
        color = parseInt(color)
        color -= 25;
        if (color < 0) {
            color = 0
        }
        return color
    })
    return darkRbgArr
}

updateButton = document.querySelector(".button")
updateButton.addEventListener('click', updateGrid)
generateGrid()