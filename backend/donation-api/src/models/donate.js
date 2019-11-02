const mongoose = require('mongoose');

const item = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    typeDonation: {
        type: String,
        requiree: true
    },
    data: {
        type: [String],
        required: true
    },
    createAt: {
        type: Date,
        default: Date.now,
    }
});

const DonateSchema = new mongoose.Schema({
    id_user: {
        type: String,
        required: true,
    },

    donations: {
        type:  [item],
        required: true,
    },
});

mongoose.model('Donate', DonateSchema);