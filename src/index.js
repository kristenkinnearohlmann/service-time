const btnEnterRecord = document.getElementById('enter-record')
const entryForm = document.getElementById('entry-form')

const init = () => {
    helloWorld()
    goodbyeWorld()
}

const helloWorld = () => {
    console.log("Hello world, I'm starting up")
}

const goodbyeWorld = () => {
    console.log("Goodbye world, I'm shutting down")
}

const enterRecord = () => {
    console.log('Do record things')
    console.log(btnEnterRecord)
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