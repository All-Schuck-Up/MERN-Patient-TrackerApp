const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

const Provider = require('../../models/Provider');

// ROUTE    POST patients/profile (dev purposes)
// DESC     Create or update patient profile
// RETURN   patient profile
router.post(
  '/',
  [
    auth,
    [
      check('firstName', 'firstName is required').not().isEmpty(),
      check('lastName', 'lastName is required').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, firstName, lastName, age, underlying } = req.body;

    const profileFields = {
      user: req.user.id,
      email,
      firstName,
      lastName,
      age,
      underlying,
    };

    try {
      let profile = await Patient.findOne({ user: req.user.id });

      if (profile) {
        // Using upsert option (creates new doc if no match is found):
        let profile = await Patient.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true, upsert: true }
        );
        return res.json(profile);
      }

      // create profile
      profile = new Patient(profileFields);

      await profile.save();

      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
