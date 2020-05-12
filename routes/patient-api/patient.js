const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

const Patient = require('../../models/Patient');

// @route    POST patient/patient  TEST WITH: POSTMAN POST to http://localhost:5000/patientApi/patient
// @desc     Register user
// @access   Public
router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Enter a valid email').isEmail(),
    check(
      'password',
      'Please enter password with atleast 4 characters'
    ).isLength({ min: 4 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      let patient = await Patient.findOne({ email });

      if (patient) {
        res.status(400).json({ errors: [{ msg: 'Patient alread in system' }] });
      }

      patient = new Patient({
        name,
        email,
        password,
      });

      // encrypt password
      patient.password = await bcrypt.hash(req.body.password, 10);
      // End encryption

      await patient.save();

      const payload = {
        patient: {
          id: patient.id,
        },
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
