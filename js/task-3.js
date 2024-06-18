
const inputName = document.querySelector('#name-input')
const toSpan = document.querySelector('#name-output')

inputName.addEventListener('input', addToSpan);
function addToSpan (evt) {
    const newText = evt.currentTarget.value.trim();
    if (newText === '') {
        toSpan.textContent = "Anonymous"
    }else {
        toSpan.textContent = newText;
    }
console.dir(evt.currentTarget.value)
}
