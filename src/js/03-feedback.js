const formEl = document.querySelector('.feedback-form');
import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'feedback-form-state'


populateTextArea();

formEl.addEventListener('submit', onFormSubmit)
formEl.addEventListener('input', throttle(savedDataInput, 1000))


function onFormSubmit(event) {
    event.preventDefault()
    event.currentTarget.reset()
    const logData = localStorage.getItem(LOCALSTORAGE_KEY)
    console.log(JSON.parse(logData))
    localStorage.removeItem(LOCALSTORAGE_KEY)

}

function savedDataInput(event) {
    let savedFormData = localStorage.getItem(LOCALSTORAGE_KEY)
    if(savedFormData) {
        savedFormData = JSON.parse(savedFormData)
    } else {
        savedFormData = {}
    }
    savedFormData[event.target.name] = event.target.value
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(savedFormData))
}

console.log(formEl.elements)

function populateTextArea() {
    let savedFormData = localStorage.getItem(LOCALSTORAGE_KEY)
    if(savedFormData) {
        savedFormData = JSON.parse(savedFormData)
        Object.entries(savedFormData).forEach(([name, value]) => {
            formEl.elements[name].value = value
        })
    }
}

