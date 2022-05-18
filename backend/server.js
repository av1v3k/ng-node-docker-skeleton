const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(4300, () => {
    console.log('Express listening on 4300');
})