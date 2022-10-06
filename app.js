//3rd PARTY MODULES
const express = require('express');
const mongoose = require('mongoose');
//NODEJS CORE MODULES
const ejs = require('ejs');
const path = require('path');
//LOCAL MODULES
const Blog = require('./models/Blog');
//CONNECT DB
mongoose.connect(
    'mongodb://koray:Cansu2580@185.224.139.239:27017/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);
const app = express();
//TEMPLATE ENGINE
app.set('view engine', 'ejs');
//MIDDLEWARES
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//EXPRESS SERVER 
port = 3000;
app.listen(port, () => {
    console.log(`Sunucu ${port} port da başlatildi.`);
});

//ROUTES
app.get('/', async (req, res) => {
    const blogs = await Blog.find({});
    res.render('index', {
        blogs,
    });
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
app.post('/blogs', async (req, res) => {
    await Blog.create(req.body);
    res.redirect('/');
});
