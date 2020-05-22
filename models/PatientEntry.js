const mongoose = require('mongoose');

const PatientEntrySchema = new mongoose.Schema({
  //schema
  patientEmail: {
    type: String,
    required: true,
  },
  form: {
    type: [
      {
        date: Date,
        symptom1: String,
        symptom2: String,
        symptom3: String,
        symptom4: String,
        additionalNote: String,
        media: String,
      },
    ],
    required: true,
    unique: true,
  },
  doctorNote: {
    type: String,
  },
  immediateAttention: {
    type: Boolean,
  },
});

const PatientEntry = mongoose.model('patientEntry', PatientEntrySchema);

module.exports = PatientEntry;
