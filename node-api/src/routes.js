const express = require('express');
const routes = express.Router();

var arquivo = "Cliente";
var arquivo2 = "Product";


const Controller = require('./controllers/'+arquivo+'Controller');

var tabela = "clientes";
//var tabela = "product";

routes.get('/'+tabela+'', Controller.index);
//routes.get('/clientes', ProductController.index);
routes.get('/'+tabela+'/:id', Controller.show);
routes.post('/'+tabela+'', Controller.store);
routes.put('/'+tabela+'/:id', Controller.updade);
routes.delete('/'+tabela+'/:id', Controller.destroy);


module.exports = routes;