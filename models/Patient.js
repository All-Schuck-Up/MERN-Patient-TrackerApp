const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
  //patient schema
  name: {
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
  generalInfo: {
    type: [
      { firstName: String, lastName: String, age: Number, underlying: Boolean },
    ],
    required: true,
  },
});

async function createPatient() {
  //async function to create mock-up patients

  const patient1 = new Patient({
    name: 'Alex',
    email: 'alex@email.com',
    password: 'alexPassword',
    generalInfo: [
      { firstName: 'Alex', lastName: 'Sandler', age: 34, underlying: false },
    ],
  });

  var result = await patient1.save();
  console.log('patient1 - ' + result);

  const patient2 = new Patient({
    name: 'Balo',
    email: 'balo@email.com',
    password: 'baloPassword',
    generalInfo: [
      { firstName: 'Balo', lastName: 'Bear', age: 57, underlying: true },
    ],
  });
  result = await patient2.save();
  console.log('patient2 - ' + result);

  const patient3 = new Patient({
    name: 'Chet',
    email: 'chet@email.com',
    password: 'chetPassword',
    generalInfo: [
      { firstName: 'Chet', lastName: 'French', age: 19, underlying: false },
    ],
  });

  result = await patient3.save();
  console.log('patient3 - ' + result);

  const patient4 = new Patient({
    name: 'Dona',
    email: 'dona@email.com',
    password: 'donaPassword',
    generalInfo: [
      { firstName: 'Done', lastName: 'Dolby', age: 45, underlying: true },
    ],
  });

  result = await patient4.save();
  console.log('patient4 - ' + result);

  const patient5 = new Patient({
    name: 'Eve',
    email: 'eve@email.com',
    password: 'evePassword',
    generalInfo: [
      { firstName: 'Eve', lastName: 'Pol', age: 38, underlying: false },
    ],
  });

  result = await patient5.save();
  console.log('patient5 - ' + result);
}

//createPatient(); //calling the async function

module.exports = Patient = mongoose.model('patient', PatientSchema);
