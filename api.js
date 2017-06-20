const express = require('express');
const api = express.Router();
var useri = [];

api.get('/time', (req, res) => {
    var time = new Date();
    var b = {
        "time": time,
    }
    res.json(b);
});

api.post('/users', (req, res) => {
    const { username, gender, agree, password } = req.body;
    useri.push({
        username, gender, agree, password
    });
    console.log(req.body);
    //res.end(req.query.username);
    res.send('ok')
    
});

api.get('/users', (req, res) => {
    res.json(useri);
});



module.exports = api;