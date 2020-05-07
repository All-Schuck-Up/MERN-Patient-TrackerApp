const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const Patient = require('../../models/Patient');

router.get('/patient/login', (req, res) => {
});
router.post('/patient/login', (req, res) => {});

router.get('/patient/:_id', (req, res) => {
});
router.post('/patient/:_id', (req, res) => {
});

// Post req, This route registers user unless already exists TEST => POSTMAN POST to http://localhost:5000/patient/
router.post(
  '/patient/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Enter a valid email').isEmail(),
    check('password', 'Please enter password with atleast 4 characters').isLength({ min: 4 }),
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

      // TO DO: --Possible password encryption

      await patient.save();
      res.send('Patient added');
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

router.get('/patient/logout', (req, res) => {
  // TO DO --
});

module.exports = router;
