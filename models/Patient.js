const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({ //patient schema
   firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    assignedDoctor: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    age: {
        type: Number,
        required: true,
    },
    underlying: {
        type: Boolean,
        required: true
    }
    
});


module.exports = Patient = mongoose.model('patient', PatientSchema);
