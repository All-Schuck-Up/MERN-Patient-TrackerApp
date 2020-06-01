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
        required: false,
        unique: false,
      },
      symptom1: {
        type: String,
      },
      symptom2: {
        type: String,
      },
      symptom3: {
        type: String,
        // required: true,
      },
      symptom4: {
        type: String,
        // required: true,
      },
      temp: {
        type: Number,
        // required: true,
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

module.exports = Patient = mongoose.model('patient', PatientSchema);