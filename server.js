const express = require('express');
const bodyParser = require('body-parser');
const { getChordFunctionFromName, invertChordQuality } = require('./chordFunctions'); 

const app = express();
const PORT = 8000;

app.use(bodyParser.json()); // Middleware to parse JSON bodies

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
    console.log('You are at the main route!');
});

app.post('/getChordFunction', (req, res) => {
    const { chordName, keyCenter } = req.body;
    console.log(`POST /getChordFunction - chordName: ${chordName}, keyCenter: ${keyCenter}`);
    try {
        const chordFunction = getChordFunctionFromName(chordName, keyCenter);
        res.json({ chordFunction });
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
});

app.post('/invertChordQuality', (req, res) => {
    const { chordName } = req.body;
    console.log(`POST /invertChordQuality - chordName: ${chordName}`);
    try {
        const invertedChord = invertChordQuality(chordName);
        res.json({ invertedChord });
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
});

app.listen(PORT, (req, res) => {
    console.log(`Server listening on ${PORT}`);
});
