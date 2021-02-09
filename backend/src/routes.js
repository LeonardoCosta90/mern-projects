const express = require('express');

const routes = express.Router();

const Usuario = require('./controllers/usuarios.controller')
//const Produto = require('./controllers/produtos.controller')

routes.get('/',Usuario.index);

// Rotas de Usuários
routes.post('/api/usuarios',Usuario.create);

module.exports = routes;