const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authPatient = require('../../middleware/authPatient');
const config = require('config');

// bring in patient model
const Patient = require('../../models/Patient');

// GET request: Retrieve user by token
router.get('/', authPatient, async (req, res) => {
  try {
    const patient = await Patient.findById(req.patient.id).select('-password');
    res.json(patient);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// POST request: Authenticate patient & get token
router.post(
  '/',
  [
    check('email', 'Enter a valid email').isEmail(),
    check('password', 'Password is required').exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let patient = await Patient.findOne({ email });

      if (!patient) {
        res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
      }

      const isMatch = await bcrypt.compare(req.body.password, patient.password);

      if (!isMatch) {
        res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
      }

      const payload = {
        patient: {
          id: patient.id,
        },
      };

      jwt.sign(payload, config.get('jwtSecret'), (err, token) => {
        if (err) throw err;
        res.json(token);
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).json('Server Error');
    }
  }
);

module.exports = router;
