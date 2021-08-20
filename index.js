// This code is from first example site
// base file - call into app dir

// require('./app/index')

// This is from another tutorial
const express = require('express')
const app = express()
const port = 3002

app.get('/', (req, res) => {
    res.sendFile('./public/index.html', {root: __dirname})
})


app.listen(port, () => {
    console.log(`Now listening on port ${port}`)
})