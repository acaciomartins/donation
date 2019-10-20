const express = require('express');
const routes = express.Router();

const UserController = require('./controllers/UserController');
const DonateController = require('./controllers/DonateController');

//Usuarios - doadores
routes.post('/user/add', UserController.add);
routes.get('/users', UserController.index);
routes.get('/user/:id', UserController.findById);
routes.put('/user/:id', UserController.update);
routes.delete('/user/:id', UserController.delete);

//Doacoes
routes.post('/donate/add', DonateController.add);
routes.get('/donations', DonateController.index);
routes.get('/donate/:id', DonateController.findById);
routes.put('/donate/:id', DonateController.update);
routes.delete('/user/:id', DonateController.delete);


module.exports = routes;

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
