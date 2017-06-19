const express = require('express');
const router = express.Router();
const users = [];

router.get('/', (req, res) => {
    const time = req.cookies.time;
    res.render('index.pug', {time});
});

router.get('/myroute/:param', (req, res) => {
    const { params: query, cookies, headers } = req;
    res.render('param.pug', {query, cookies, headers});
    
});

router.get('/form', (req, res) => {
    res.render('users.pug', {users});
});

router.post('/form', (req, res) => {
    users.push(req.body.username)
    users.push(req.body.password)
    users.push(req.body.gender)
    users.push(req.body.check)    
    res.redirect('/result');
});

router.get('/result', (req, res) => {
    res.render('userlist.pug', {users});
})

module.exports = router;