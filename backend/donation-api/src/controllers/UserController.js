const mongoose = require('mongoose');

const User = mongoose.model('User');

module.exports = {
    async add(req, res) {
        const user = await User.create(req.body);
        return res.json(user);
    },
    async index(req, res) {
        const users = await User.find();
        return res.json(users);
    },
    async findById(req, res) {
        const user = await User.findById(req.params.id);
        return res.json(user);
    },
    async update(req, res) {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.json(user);
    },
    async delete(req, res) {
        const user = await User.findByIdAndRemove(req.params.id);
        return res.send();
    }
}