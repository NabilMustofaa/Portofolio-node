const express = require('express');
const expressLayouts = require('express-ejs-layouts');


const app = express();
const port = 3000;

//ejs view engine setup
app.set('view engine','ejs')
app.use(expressLayouts);
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))


//routes
app.get('/', (req, res) => {
    res.render('index',
        {
            title: 'Nabil Portofolio',
            layout: 'layouts/main',
            id: 'home'
            
        }
    );  
});


app.listen(port, () => console.log(`Server started on http://localhost:${port}`));

