const express = require('express');
const router = express.Router();
const users = [];

router.get('/', (req, res) => {
    const time = req.cookies.time;
    res.render('index', {time});
});
const a = { b: 1 };
const { b: q } = a; // const q = a.b;
const { b } = a; // const b = a.b;

router.get('/myroute/:param', (req, res) => {
    const { query, params:balalaika, cookies, headers } = req;
    
    res.render('param', {balalaika, query, cookies, headers});
    
});

router.get('/form', (req, res) => {
    res.render('users', {users});
});

router.post('/form', (req, res) => {
    req.checkBody('username', 'Type username').notEmpty();
    req.checkBody('password', 'Type password').notEmpty();
    req.checkBody('gender', 'Type gender').notEmpty();
    
    req.getValidationResult().then(function(result) {
        if (result.isEmpty()) {
        users.push(req.body.username)
        users.push(req.body.password)
        users.push(req.body.gender)
        users.push(req.body.check)   
        res.redirect('/result');
        return;
        }
        res.end('invalid');    
        
    });
});

router.get('/result', (req, res) => {
    res.render('userlist', {users});
});

module.exports = router;