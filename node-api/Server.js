const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//iniciando o app
const app = express();
app.use(express.json());
app.use(cors());
//Iniciando o BD
mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true});

requireDir('./src/models');


const Clientes = mongoose.model("Clientes");
const Product = mongoose.model("Product");


//Rotas
app.use('/api', require('./src/routes'));

app.listen(3001);


///docker start mongodb
///cd node-api && npm run dev