require('dotenv').config();
const express = require('express');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT;

/* handlebars */
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials', (err) => {
});

// Servir contenido estático
app.use( express.static('public'))

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Yael Velasco',
        titulo: 'Curso de Node',
    })
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Yael Velasco',
        titulo: 'Curso de Node',
    })
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Yael Velasco',
        titulo: 'Curso de Node',
    })
});

app.get('/yael', (req, res) => {
    res.send('Hello, world. I am Yael')
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/assets/back/templates/404.html')
})




app.listen(port, () => {
    console.log(`La app esta corriendo en el puerto ${port}`);
})