const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({ //patient schema
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    generalInfo: {
        type: [{firstName: String, lastName: String, age: Number, underlying: Boolean}], 
        required: true
    }
});

const Patient = mongoose.model('Patient', PatientSchema);

module.exports = Patient;