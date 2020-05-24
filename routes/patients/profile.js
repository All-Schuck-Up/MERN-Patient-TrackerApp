const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const checkObjectId = require('../../middleware/checkObjectId');
const { check, validationResult } = require('express-validator');

const Patient = require('../../models/Patient');
const Provider = require('../../models/Provider');
const User = require('../../models/User');

router.get('/patient/:_id', (req, res) => {});
router.post('/patient/:_id', (req, res) => {});

// ROUTE  GET patients/profile/me
// DESC   Get logged in users profile
// RETURN
router.get('/me', auth, async (req, res) => {
  try {
    const accountType = req.user.accountType;
    if (accountType == 'patient') {
      const profile = await Patient.findOne({ user: req.user.id });

      if (!profile) {
        return res
          .status(400)
          .json({ msg: 'There is no such profile for user' });
      }

      res.json(profile);
    } else {
      const profile = await Provider.findOne({ user: req.user.id });

      if (!profile) {
        return res
          .status(400)
          .json({ msg: 'There is no such profile for user' });
      }

      res.json(profile);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// ROUTE  GET patients/profile/:id
// DESC   Get profile by id
// RETURN onSuccess: target profile, onFail: err.msg
router.get('/:user_id', checkObjectId('user_id'), async (req, res) => {
  try {
    const profile = await Patient.findOne({
      user: req.params.user_id,
    }).populate('user');

    if (!profile) {
      return res.status(400).json({ msg: 'Profile not found' });
    }

    return res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

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

// ROUTE    GET patient/profile
// DESC     Get all profiles
// RETURN   onSuccess: returns all profiles onFail: err.msg
router.get('/', async (req, res) => {
  try {
    const profiles = await Patient.find().populate('user', [
      'email',
      'accountType',
    ]);
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// ROUTE    PUT patient/profile/newEntry
// DESC     Add's patient symptom entry
// RETURN   onSuccess: returns updated profile with new entry onFail: err.msg
router.put('/newEntry', auth, async (req, res) => {
  const {
    date,
    symptom1,
    symptom2,
    symptom3,
    symptom4,
    temp,
    comment,
    doctorNote,
    immediateAttention,
  } = req.body;

  const newEntry = {
    date,
    symptom1,
    symptom2,
    symptom3,
    symptom4,
    temp,
    comment,
    doctorNote,
    immediateAttention,
  };

  try {
    const profile = await Patient.findOne({ user: req.user.id });

    profile.patientEntry.unshift(newEntry);

    await profile.save();

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
