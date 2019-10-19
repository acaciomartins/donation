const express = require('express');
const routes = express.Router();

const UserController = require('./controllers/UserController');
const DonateController = require('./controllers/DonateController');

//Usuarios - doadores
routes.get('/users', UserController.index);

//Doacoes
routes.get('/donations', DonateController.index);
routes.post('/donate/incluir', DonateController.incluir);

// routes.get('/users', (req, res) => {

    // User.create({
    //     name: 'Acácio Amorelli Martins',
    //     password: '123',
    //     cep: '07041030',
    //     street: 'Av Carlos Ferreira Endres, 1205',
    //     complement: 'Ap 66 Bloco C',
    //     neighborhood: 'Vila Endres',
    //     city: 'Guarulhos',
    //     uf: 'SP',
    //     email: 'acacio.am@gmail.com',
    //     flag_email: '1',
    //     flag_whatsapp: '0'
    // })


//     res.send('Oi gato!!!');
// })

module.exports = routes;