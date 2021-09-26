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
    buildEmployeeEntryForm(entryForm)
    showElement(entryForm)
}

const showElement = element => {
    element.classList.remove('hidden')
}

const hideElement = element => {
    element.classList.add('hidden')
}

const buildEmployeeEntryForm = (entryForm) => {
    const div = entryForm
    const form = document.createElement('form')

    form.innerHTML = `
        <p>
            <label for="first_name">First name</label><br/>
            <input type="text" id="first_name" name="first_name" />
        </p>
        <p>
            <label for="last_name">Last name</label><br/>
            <input type="text" id="last_name" name="last_name" />
        </p>
        <p>
            <label>Enter years served with area, separated by commas (ex. 1999 Finance, 2000 Finance, 2001 Accounting)
        </p>
        <input type="submit" value="Add employee">
    `

    div.appendChild(form)
}

// event listeners

btnEnterRecord.addEventListener('click', () => {
    console.log('Clicked Enter Record')
    enterRecord()
})

// start the application
init()