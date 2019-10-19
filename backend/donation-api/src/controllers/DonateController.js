const mongoose = require('mongoose');

const Donate = mongoose.model('Donate');

module.exports = {
    async index(req, res) {
        const donations = await Donate.find();

        return res.json(donations);
    },

    async incluir(req, res) {
        // Incluir doacoes
        const donate = await Donate.create(req.body);

        return res.json(donate);
    }
}