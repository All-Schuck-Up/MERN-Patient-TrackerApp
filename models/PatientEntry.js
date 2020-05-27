const mongoose = require('mongoose');


const PatientEntrySchema = new mongoose.Schema({  //schema
    patientEmail: {
        type: String,
        required: true
    },
    form: {
        type: [{ date: {
          type: Date,
          default: Date.now
        }, symptom1: String, symptom2: String, symptom3: String, symptom4: String, additionalNote: String, temperature: String}],
        required: true,
        unique: true
    },
    doctorNote: {
        type: String
    },
    immediateAttention: {
        type: Boolean
    },
    patientId: {
      type: String, 
      required : true
    }
});

const PatientEntry = mongoose.model('patientEntry', PatientEntrySchema);

module.exports = PatientEntry;

