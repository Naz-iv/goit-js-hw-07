
document.body.classList.add('body');
const body = document.querySelector('.body') ;
const span = document.querySelector('.color')
const btn = document.querySelector('.change-color')
btn.addEventListener('click', handlerClick)

function handlerClick (evt) {
body.style.backgroundColor = getRandomHexColor();
span.textContent = body.style.backgroundColor;

  console.log(evt.currentTarget)
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
