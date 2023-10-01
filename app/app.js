const form = document.querySelector('form')
const ul = document.querySelector('ul')

form.addEventListener('submit', e => {
    const inputValue = e.target.inputAddTodo.value.trim()
    console.log(inputValue)
})