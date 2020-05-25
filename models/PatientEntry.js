const mongoose = require('mongoose');

const PatientEntrySchema = new mongoose.Schema({
  //schema
  firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
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


module.exports = PatientEntry = mongoose.model(
  'patientEntry',
  PatientEntrySchema
);
