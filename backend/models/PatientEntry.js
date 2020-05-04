const mongoose = require('mongoose');

const PatientEntrySchema = new mongoose.Schema({
    patientName: {
        type: String,
        required: true
    },
    form: {
        type: Array,
        required: true,
        unique: true
    },
    doctorNote: {
        type: String
    },
    additionalNote: {
        type: String
    },
    immediateAttention: {
        type: Boolean
    },
    entryDate: {
        type: Date,
        default: Date.now
    }    
});

module.exports = PatientEntry = mongoose.model('patientEntry', PatientEntrySchema);