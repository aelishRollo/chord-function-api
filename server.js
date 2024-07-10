const express = require('express')
const app = express()
const PORT = 8000

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html')
    console.log('You are at the main route!')
})


app.listen(PORT,(req,res) => {
    console.log(`Server listening on ${PORT}`)
})
