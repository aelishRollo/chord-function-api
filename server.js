const express = require('express');
const bodyParser = require('body-parser');
const { getChordFunctionFromName } = require('./chordFunctions'); 

const app = express();
const PORT = 8000;

app.use(bodyParser.json()); // Middleware to parse JSON bodies

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/API', (req, res) => {
    const { keyCenter, chordRoot, quality } = req.query;

    console.log(`Received request with keyCenter: ${keyCenter}, chordRoot: ${chordRoot}, quality: ${quality}`);

    try {
        const chordFunction = getChordFunctionFromName(keyCenter, chordRoot, quality);
        res.json({ chordFunction });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});



app.listen(process.env.PORT || PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
