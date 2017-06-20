const express = require('express');
const app = express();
var cookieParser = require('cookie-parser');
const router = require('./router');
const api = require('./api');
const bodyparser = require('body-parser');
const expressValidator = require('express-validator');



app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
app.use(expressValidator());

app.use(cookieParser());


app.use(express.static('static'));
app.set('views', './static')
app.set('view engine', 'pug');

app.use('/', (req, res, next) => {
    var time = new Date();
    if(!req.cookies.time){
        res.cookie('time', time.toString());
    }
    next();
});



// app.use('/', (req, res, next)=>{
//     res.render('index.pug', {"timer": req.cookies.time})
//     next();
// });


app.use('/', router);

app.use('/api', api);


app.listen(3000, ()=>{
    console.log("server working");
});