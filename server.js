const express = require('express');
const bodyParser = require('body-parser');
const { getChordFunctionFromName } = require('./chordFunctions'); // Ensure you have this module

const app = express();
const PORT = 8000;

// let myObject = {
//     name: 'Prometheus',
//     age: 9001,
//     bipedal: true
// }

app.use(bodyParser.json()); // Middleware to parse JSON bodies

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
    console.log('You are at the main route!');
});

// app.get('/api', (req, res) => {
//     res.json(myObject)
//     console.log('User made a request, yo')
// })

app.post('/getChordFunction', (req, res) => {
    const { chordName, keyCenter } = req.body;
    try {
        const chordFunction = getChordFunctionFromName(chordName, keyCenter);
        res.json({ chordFunction });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.listen(PORT, (req, res) => {
    console.log(`Server listening on ${PORT}`);
});
