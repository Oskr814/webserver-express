const express = require('express');
const app = express();
const hbs = require('hbs');

require('./hbs/helpers/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// HBS
app.set('view engine', 'hbs');



hbs.registerPartials(__dirname + '/views/partials');

// app.get('/', (req, res) => {
//     //res.send('Hola mundo');


//     let salida = {
//         nombre: 'Oscar',
//         edad: 22,
//         url: req.url
//     };

//     res.send(salida);
// });

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'oscar'
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(port, () => console.log(`Escuchando peticiones en el puerto ${port}`));