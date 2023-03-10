const express = require('express');
const app = express();
const port = 3000;//test2

console.log('Node app started');

app.set('port', port);

app.get('/', (req, res) => {
    res.send('Home');
});

app.get('/json', (req, res) => {
    let json = {};
    json.data = 'my data';
    res.send(json);
});

app.listen(app.get('port'));