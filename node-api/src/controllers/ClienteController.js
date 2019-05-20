const mongoose = require('mongoose');

const Clientes = mongoose.model('Clientes');

module.exports = {
    async index(req, res) {
        const {page = 1} = req.query;
        const products = await Clientes.paginate({},{page, limit: 10});

        return res.json(products);
    },

    async show(req, res){
        const product = await Clientes.findById(req.params.id);

        return res.json(product);
    },
    
    async store(req, res){
        //criação
        const product = await Clientes.create(req.body);
        return res.json(product);
    },

    async updade(req, res){
        const product = await Clientes.findByIdAndUpdate(req.params.id, req.body, {new:true})
        
        return res.json(product);
    },
    async destroy(req,res){
        await Clientes.findByIdAndRemove(req.params.id);
        return res.send();
    }
};