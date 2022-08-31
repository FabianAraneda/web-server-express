const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// El uso de middleware tiene prioridad sobre las rutas de abajo
app.use( express.static('public') );

//Renderizar vista con HBS
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Emilia Araneda',
        titulo: 'Curso Node'
    })
});

app.get('/generic.html', (req, res) => {
    res.render('generic', {
        nombre: 'Emilia Araneda',
        titulo: 'Curso Node'
    })
});

app.get('/elements.html', (req, res) => {
    res.render('elements', {
        nombre: 'Emilia Araneda',
        titulo: 'Curso Node'
    })
});

// app.get('/generic', (req, res) => {
//     res.sendFile(__dirname + '/public/generic.html')
// });

// app.get('/elements', (req, res) => {
//     res.sendFile(__dirname + '/public/elements.html')
// });

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
});

app.listen(port);