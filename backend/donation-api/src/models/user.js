const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    cep: {
        type: String,
        required: true,
    },
    street: {
        type: String,
        required: true,
    },
    complement: {
        type: String,
        required: true,
    },
    neighborhood: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    uf: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    flag_email: {
        type: Number,
        required: true,
    },
    flag_whatsapp: {
        type: Number,
        required: true,
    },
    createAt: {
        type: Date,
        default: Date.now,
    }
});

mongoose.model('User', UserSchema);