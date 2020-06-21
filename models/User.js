const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  // User schema
  name: {
    type: String,
    required: true,
  },
  accountType: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Patient = mongoose.model('user', UserSchema);
