const express = require('express');
const app = express();
const ejs = require('ejs');
app.set('view engine', 'ejs');
const path = require('path');
app.use(express.static('public'));
port = 3000;
app.listen(port, () => {
    console.log(`Sunucu ${port} port da başlatildi.`);
});
app.get('/', (req, res) => {
    res.render('index');
});
app.get('/about', (req, res) => {
    res.render('about');
});
app.get('/add_post', (req, res) => {
    res.render('add_post');
});
app.get('/post', (req, res) => {
    res.render('post');
});
