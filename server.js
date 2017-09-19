const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 8080;

app.listen(port, () => {
    console.log('We are live on ' + port);
});

app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/contents/:page', (req, res) => {
    const page = req.params.page;
    const json = path.join(__dirname, 'services', page + '.json');

    if(fs.existsSync(json)){
        res.sendFile(json);
    }else{
        res.status(404).send('Not found');
    }
});

app.use('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});



