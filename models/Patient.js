const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
  //patient schema
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  underlying: {
    type: Boolean,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  patientEntry: [
    {
      date: {
        type: Date,
        default: Date.now,
        required: true,
        unique: true,
      },
      symptom1: {
        type: Boolean,
        required: true,
      },
      symptom2: {
        type: Boolean,
        required: true,
      },
      symptom3: {
        type: Boolean,
        required: true,
      },
      symptom4: {
        type: Boolean,
        required: true,
      },
      temp: {
        type: String,
        required: true,
      },
      comment: {
        type: String,
      },
      doctorNote: {
        type: String,
      },
      immediateAttention: {
        type: Boolean,
      },
    },
  ],
});

const Patient = mongoose.model('Patient', PatientSchema);

module.exports = Patient;
