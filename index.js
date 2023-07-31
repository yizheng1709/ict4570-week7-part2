const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

// serve static files from the 'public' directory
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

// run `npm install` and then `npm node index.js` to start the server
