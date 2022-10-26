const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');


require('./utils/db');
const portos = require('./models/portos');

const app = express();
const port = 3000;

//ejs view engine setup
app.set('view engine','ejs')
app.use(expressLayouts);
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))


//session setup
app.use(cookieParser('secret'));
app.use(session({
    cookie: { maxAge: 60000 },
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));


//routes
app.get('/', (req, res) => {
    res.render('index',
        {
            title: 'home',
            layout: 'layouts/main',
            id: 'home'
            
        }
    );  
});
//detail
app.get('/detail/:name', async (req, res) => {
    const porto = await portos.findOne({name: req.params.name});
    
    res.render('detail',
        {
            title: 'Detail',
            layout: 'layouts/main',
            id: 'detail',
            porto
        }
    );  
});



app.listen(port, () => console.log(`Server started on http://localhost:${port}`));

