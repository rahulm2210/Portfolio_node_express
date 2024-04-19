// Imports
const express = require('express');
const expressLayouts = require('express-ejs-layouts')
const app = express();
const port = 3000;

// Listen on port 3000
app.listen(port, () => console.log('Listen on port 3000'));

// static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

// set views
app.use(expressLayouts)
app.set('layout','./layouts/portfolio')
app.set('view engine','ejs')

app.get('', (req,res) => {
    res.render('index',{title: 'Portfolio'})
})