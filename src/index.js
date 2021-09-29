const btnEnterRecord = document.getElementById('enter-record')
const entryForm = document.getElementById('entry-form')

const init = () => {
    console.log('Service Time')
}

const enterRecord = () => {
    showElement(entryForm)
}

const showElement = element => {
    element.classList.remove('hidden')
}

const hideElement = element => {
    element.classList.add('hidden')
}

// event listeners

btnEnterRecord.addEventListener('click', () => {
    console.log('Clicked Enter Record')
    enterRecord()
})

// start the application
init()