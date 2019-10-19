const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o app
const app = express();

// Permita JSON no REST
app.use(express.json());

//Iniciando BD
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true, useUnifiedTopology: true });
requireDir('./src/models')

// Rota
app.use('/api', require('./src/routes'));

app.listen(3001);