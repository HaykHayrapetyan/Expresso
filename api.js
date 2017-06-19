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
    const { username, gender, agree, password } = req.query;
    useri.push({
        "username": username,
        "password": password,
        "gender": gender,
        "agree": agree,
    });
    console.log(username);
    res.end(req.query.username);
    
});

api.get('/users', (req, res) => {
    res.contentType('application/json');
    res.send(JSON.stringify(useri));
});



module.exports = api;