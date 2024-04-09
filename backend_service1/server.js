const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello from Backend Service 1!');
});

app.listen(5001, () => {
    console.log('Backend Service 1 listening on port 5001');
});
