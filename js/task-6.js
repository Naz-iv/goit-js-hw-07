
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const createButton = document.querySelector("button[data-create]")
const destroyButton = document.querySelector("button[data-destroy]")
const controls = document.querySelector('#controls')
const boxes = document.querySelector('#boxes')
// console.log(boxes)




function createBoxes(amount) {
  let size = 30
  const fragment = document.createDocumentFragment()
for (let i = 0; i < amount; i++) {
  const newBox = document.createElement('div')
   newBox.style.height = `${size}px`,
  newBox.style.width =  `${size}px`,
  newBox.style.backgroundColor = getRandomHexColor()
 fragment.append(newBox);  
 size +=10
}
boxes.append(fragment)
}

createButton.addEventListener('click', addBox)

function addBox (evt) {
 boxes.innerHTML = ''
  const amount = controls.firstElementChild.value
  if(amount>=1 && amount <=100) {
    createBoxes(amount)
  }
}

destroyButton.addEventListener('click', destroyBoxes)

function destroyBoxes() {
  boxes.innerHTML = ""
}









