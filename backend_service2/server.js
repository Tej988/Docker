const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello from Backend Service 2!');
});

app.listen(5002, () => {
    console.log('Backend Service 2 listening on port 5002');
});
