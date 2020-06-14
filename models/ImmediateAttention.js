const mongoose = require('mongoose');

const ImmediateAttention = new mongoose.Schema({
    patientID: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    checked: {
        type: Boolean,
        default: false
    }, 
    date: {
        type: Date,
        default: Date.now
    }
});

const attn = mongoose.model('immediateAttention', ImmediateAttention);

module.exports = attn;
