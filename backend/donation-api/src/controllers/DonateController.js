const mongoose = require('mongoose');

const Donate = mongoose.model('Donate');
const User = mongoose.model('User');

module.exports = {
    async add(req, res) {
        const donate = await Donate.create(req.body);
        return res.json(donate);
    },
    async index(req, res) {
        const donations = await Donate.find();

        return res.json(donations);
    },
    async findById(req, res) {
        const donate = await Donate.findById(req.params.id);
        return res.json(donate);
    },
    async update(req, res) {
        const donate = await Donate.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.json(donate);
    },
    async delete(req, res) {
        const donate = await Donate.findByIdAndRemove(req.params.id);
        return res.send();
    },
    async findByUserId(req, res) {

        const donate = await Donate.find({ "id_user": req.params.id});
        console.log('req.params.id: ' + req.params.id);
        const user = await User.findById(req.params.id);
        const donateByUser = {
            donate,
            user
        }
        return res.json(donateByUser);
    },
}