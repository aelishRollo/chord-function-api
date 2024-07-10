const express = require('express')
const app = express()
const PORT = 8000


let myObject = {
    name: 'Prometheus',
    age: 9001,
    bipedal: true
}


app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html')
    console.log('You are at the main route!')
})

app.get('/api', (req,res) => {
    res.json(myObject)
    console.log('User made a request, yo')
})


app.listen(PORT,(req,res) => {
    console.log(`Server listening on ${PORT}`)
})
