// https://github.com/gnanadeep/basic-node-server

const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send({
        key: "welcome"
    });
});

app.listen(8080);