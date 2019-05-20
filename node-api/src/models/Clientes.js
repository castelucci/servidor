const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ClientesSchema = new mongoose.Schema({
    nomeDoClientes: {
        type: String,
        required: true,
    },
    nomeDoEstabelecimento: {
        type: String,
        required: true,
    },
    descricao: {
        type: String,
        required: true,
    },
    endereco: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

ClientesSchema.plugin(mongoosePaginate);

mongoose.model('Clientes', ClientesSchema);