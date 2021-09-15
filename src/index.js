console.log('Hello world, is this thing on?')
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

// start the application
init()