const mongoose = require('mongoose');

const DonateSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    id_user: {
        type: Number,
        required: true,
    },
    donations: {
        type: String,
        required: true,
    }
});

mongoose.model('Donate', DonateSchema);