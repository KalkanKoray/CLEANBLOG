//3rd PARTY MODULES
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

//LOCAL MODULES
const blogController = require('./controllers/blogControllers')
const pageController = require('./controllers/pageControllers')

//CONNECT DB
mongoose.connect(
    'mongodb://koray:Cansu2580@185.224.139.239:27017/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);
//express uygulamada kullanıma alınıyor
const app = express();
//TEMPLATE ENGINE
app.set('view engine', 'ejs');
//MIDDLEWARES
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
    methodOverride('_method', {
        methods: ['GET', 'POST'],// FOR DELETE AND PUT REQUESTS
    })
);

//MODEL ROUTE CONTROLLERS 
app.get('/', blogController.getAllBlogs);
app.get('/blogs/:id', blogController.getBlog);
app.post('/blogs', blogController.createBlog);
app.put('/blogs/:id', blogController.updateBlog);
app.delete('/blogs/:id', blogController.deleteBlog);

//PAGE ROUTE CONTROLLERS
app.get('/about', pageController.getAboutPage);
app.get('/add_post', pageController.getAddPage);
app.get('/blogs/edit/:id', pageController.getEditPage);

//EXPRESS SERVER
port = 3000;
app.listen(port, () => {
    console.log(`Sunucu ${port} port da başlatildi.`);
});

