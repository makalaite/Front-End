const express = require('express')
const app = express()

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('index')
});

app.get('/accounts', function (req, res) {
    res.render('accounts')
});

app.get('/account', function (req, res) {
    res.render('inner')
});

app.get('/transfer', function (req, res) {
    res.render('payment')
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});
