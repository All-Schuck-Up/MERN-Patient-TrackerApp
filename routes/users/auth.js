const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const auth = require('../../middleware/auth');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const User = require('../../models/User');
const Patient = require('../../models/Patient');
const Provider = require('../../models/Provider');

// route    GET users/auth
// desc     Get user by token (req is token vs user input)
// return    onSuccess: decode token and return user   onFail: 'Server Error'
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// route    POST users/auth
// desc     Authenticate user & get token
// return   onSuccess: user token   onFail: err message
router.post(
  '/',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({
          errors: [{ msg: 'Invalid Credentials (dev: User is not in found)' }],
        });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({
          errors: [
            { msg: 'Invalid Credentials (dev: passwords are not a match)' },
          ],
        });
      }

      const payload = {
        user: {
          id: user.id,
          accountType: user.accountType,
        },
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );

      // V3 UPDATE ----------
      // const accountType = user.accountType;
      // console.log(accountType);
      // if (user.accountType == 'patient') {
      //   const patient = await Patient.findOne({ email });

      //   const payload = {
      //     patient: {
      //       fName: patient.firstName,
      //       lName: patient.lastName,
      //       age: patient.age,
      //       uderlying: patient.underlying,
      //     },
      //   };

      //   jwt.sign(
      //     payload,
      //     config.get('jwtSecret'),
      //     { expiresIn: 3600 },
      //     (err, token) => {
      //       if (err) throw err;
      //       res.json({ token });
      //     }
      //   );
      // } else {
      //   const provider = await provider.findOne({ email });

      //   const payload = {
      //     provider: {
      //       fName: patient.firstName,
      //       lName: patient.lastName,
      //     },
      //   };
      // ----------------------->
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
