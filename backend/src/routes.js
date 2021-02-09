const express = require('express');

const routes = express.Router();

const Usuario = require('./controllers/usuarios.controller')
//const Produto = require('./controllers/produtos.controller')

routes.get('/',Usuario.index);

// Rotas de Usuários
routes.post('/api/usuarios',Usuario.create);
routes.get('/api/usuarios',Usuario.index);
routes.get('/api/usuarios.details/:_id',Usuario.details);
routes.delete('/api/usuarios/:_id',Usuario.delete);

module.exports = routes;