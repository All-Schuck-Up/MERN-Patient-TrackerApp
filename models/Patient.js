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
    password: {
        type: String,
        required: true
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


module.exports = Patient = mongoose.model('patient', PatientSchema);
