const mongoose = require('mongoose');

const Alert = new mongoose.Schema({
    patientId: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    alertMessage: {
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

const alert = mongoose.model('alert', Alert);

module.exports = alert;
